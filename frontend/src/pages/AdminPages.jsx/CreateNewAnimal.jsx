import { Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import CreateAnimalForm from "../../components/CreateAnimalForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateNewAnimal() {
  const methods = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    axios
      .post(`http://localhost:5173/animals`, data)
      .then(() => {
        navigate(`/admin`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CreateAnimalForm />
        </form>
      </FormProvider>
    </Container>
  );
}
