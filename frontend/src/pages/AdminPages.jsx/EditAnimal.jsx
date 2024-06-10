import { Container } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import CreateAnimalForm from "../../components/CreateAnimalForm";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditAnimal ()
{
  const methods = useForm();
  const navigate = useNavigate();
  const { id } = useParams()

  const onSubmit = async (data) => {
    console.log(data, "dataa");
    axios
      .put(`http://localhost:5173/animals/${id}`, data)
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
