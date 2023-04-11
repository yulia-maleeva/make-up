import React from "react";

import { getInvoice } from "../../../api";

import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/actions/cart";

import { useSelector } from "react-redux";

import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

import { TextField, Button } from "@mui/material";

import styled from "styled-components";
import {
  orangeColor,
  whiteColor,
  lightGreyColor,
} from "../../../constants/colorPalette";

const inputStyles = {
  "& .MuiInputLabel-root.Mui-focused": {
    color: `${lightGreyColor}`,
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: `${lightGreyColor}`,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${lightGreyColor}`,
  },
};

const CheckoutForm = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart);

  const getMonobankResponse = async () => {
    const basketOrder = cartProducts.map((product) => {
      return {
        name: product.name,
        qty: product.quantity,
        sum: product.price * product.quantity,
        icon: product.image,
        unit: "pcs",
      };
    });

    const calcTotalSum = () => {
      let totalSum = 0;

      cartProducts.map((product) => {
        const productSum = product.price * product.quantity;
        totalSum += productSum;
      });

      return totalSum;
    };

    const response = await getInvoice({
      amount: calcTotalSum(),
      ccy: 840,
      merchantPaymInfo: {
        reference: "84d0070ee4e44667b31371d8f8813947",
        destination: "MAKEUP",
        basketOrder,
      },
      redirectUrl: `${window.location.origin}/`,
      validity: 3600,
      paymentType: "debit",
    });

    window.location.href = response.data.pageUrl;
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", mobile: "" }}
      onSubmit={(formikHelpers) => {
        getMonobankResponse();
        formikHelpers.resetForm();
        dispatch(clearCart());
      }}
      validationSchema={object({
        name: string().required("Please enter your name").min(3, "Too short"),
        email: string()
          .required("Please enter your email")
          .email("Invalid email"),
        mobile: string()
          .required("Please enter your mobile")
          .matches(
            /^\+380\d{3}\d{2}\d{2}\d{2}$/,
            "Please enter a valid mobile number: it must start with +380"
          ),
      })}
    >
      {(props) => (
        <FormContainer>
          <CustomForm>
            <Field
              as={TextField}
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              size="small"
              sx={inputStyles}
              fullWidth
              required
              error={Boolean(props.errors.name) && Boolean(props.touched.name)}
              helperText={Boolean(props.touched.name) && props.errors.name}
            />
            <Field
              as={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              sx={inputStyles}
              fullWidth
              required
              error={
                Boolean(props.errors.email) && Boolean(props.touched.email)
              }
              helperText={Boolean(props.touched.email) && props.errors.email}
            />
            <Field
              as={TextField}
              name="mobile"
              type="tel"
              label="Phone Number (+380XXXXXXXXX)"
              variant="outlined"
              size="small"
              sx={inputStyles}
              fullWidth
              required
              error={
                Boolean(props.errors.mobile) && Boolean(props.touched.mobile)
              }
              helperText={Boolean(props.touched.mobile) && props.errors.mobile}
            />
            <CustomButton
              type="submit"
              disabled={!props.dirty || !props.isValid}
              variant="contained"
            >
              Confirm order
            </CustomButton>
          </CustomForm>
        </FormContainer>
      )}
    </Formik>
  );
};

export default CheckoutForm;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`;

const CustomButton = styled(Button)`
  width: 150px;

  &:not(:disabled) {
    background-color: ${whiteColor};
    color: ${orangeColor};
    border: 1px solid ${orangeColor};
    box-shadow: none;
  }

  &:not(:disabled):hover {
    background-color: ${orangeColor};
    color: ${whiteColor};
    box-shadow: none;
  }
`;
