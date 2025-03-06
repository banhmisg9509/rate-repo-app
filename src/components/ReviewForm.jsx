import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import { GET_RESPOSITORY } from "../graphql/queries";
import { useCreateReview } from "../hooks/useCreateReview";
import Button from "./Button";
import Text from "./Text";
import TextInput from "./TextInput";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 8,
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Owner name is required").lowercase().trim(),
  repositoryName: yup
    .string()
    .required("Repository name is required")
    .lowercase()
    .trim(),
  rating: yup
    .number()
    .typeError("Must be a number")
    .integer("Rating must be an integer")
    .min(0, "Min rating is 0")
    .max(100, "Max rating is 100")
    .required("Rating is required"),
  text: yup.string().trim(),
});

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      ownerName: "",
      repositoryName: "",
      rating: null,
      text: "",
    },
    onSubmit: async (values) => {
      const { ownerName, repositoryName, rating, text } = values;

      const { data } = await createReview({
        variables: {
          review: { ownerName, repositoryName, rating: Number(rating), text },
        },
      });

      navigate(`/repo/${data.createReview.repositoryId}`);
    },
    validationSchema,
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Repository owner name"
        value={form.values.ownerName}
        onChangeText={form.handleChange("ownerName")}
        error={form.touched.ownerName && form.errors.ownerName}
      />
      {form.touched.ownerName && form.errors.ownerName && (
        <Text color="error">{form.errors.ownerName}</Text>
      )}
      <TextInput
        placeholder="Repository name"
        value={form.values.repositoryName}
        onChangeText={form.handleChange("repositoryName")}
        error={form.touched.repositoryName && form.errors.repositoryName}
      />
      {form.touched.repositoryName && form.errors.repositoryName && (
        <Text color="error">{form.errors.repositoryName}</Text>
      )}
      <TextInput
        placeholder="Rating between 0 and 100"
        keyboardType="numeric"
        value={form.values.rating}
        onChangeText={form.handleChange("rating")}
        error={form.touched.rating && form.errors.rating}
      />
      {form.touched.rating && form.errors.rating && (
        <Text color="error">{form.errors.rating}</Text>
      )}
      <TextInput
        placeholder="Review"
        multiline
        value={form.values.text}
        onChangeText={form.handleChange("text")}
      />
      <Button text="Create a review" onPress={form.handleSubmit} />
    </View>
  );
};

export default ReviewForm;
