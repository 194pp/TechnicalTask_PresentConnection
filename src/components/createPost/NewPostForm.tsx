import React, {useState} from "react";
import {Form, Formik, FieldAttributes, useField} from "formik";
import classes from './NewPostForm.module.css';
import MyButton from "../ui/MyButton/MyButton";
import {TextField} from "@material-ui/core";
import * as yup from 'yup';
import {API_URL} from "../../config/config";

type MyType = {
  label?: string
} & FieldAttributes<object>;

const MyTextField: React.FC<MyType> = ({...props}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      label={props.label}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  userId: yup.number()
    .required()
    .min(1),
  title: yup.string()
    .min(5)
    .max(200)
    .required(),
  body: yup.string()
    .min(10)
    .max(500)
    .required(),
});

const NewPostForm: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState('');

  return (
    <Formik
      initialValues={{userId: '', title: '', body: ''}}
      onSubmit={(data, {setSubmitting}) => {
        setSubmitting(true);
        fetch(`${API_URL}`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            "Content-type": 'application/json',
          }
        }).then(res => res.json())
          .then((data) => {
            setResponseMessage(data);
          })
          .catch(err => console.log(err))
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({
          values,
          errors,
          isSubmitting,
        }) => (
        <Form className={classes.Form}>
          <MyTextField
            required
            name='userId'
            label="userId"
            type="number"
          />
          <MyTextField
            label="title"
            name='title'
            placeholder='title'
          />
          <MyTextField
            label="body"
            name='body'
            placeholder='body'
          />
          <MyButton title='Submit' type='submit' disabled={isSubmitting}/>
          {!!responseMessage ? <div>
            <label className={classes.ResponseLabel}>Post creation successful.</label>
            <pre>{JSON.stringify(responseMessage, null, 2)}</pre>
          </div> : ''}
          {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
          {/*<pre>{JSON.stringify(errors, null, 2)}</pre>*/}
        </Form>
      )}
    </Formik>
  )
}

export default NewPostForm;
