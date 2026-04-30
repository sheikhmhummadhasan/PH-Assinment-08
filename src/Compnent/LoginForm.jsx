'use client'
import { Envelope } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { ArrowRightToSquare } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';
import Signinform from './Signinform';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';


const LoginForm = () => {

  const handelGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // e.preventDefault()
    const { email, password } = e;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
      redirect: false
    });

    console.log(data);

    if (data) {
      toast.success("Login successful");
      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 1200);
    }

    if (error) {
      toast.error(error.message || "Login failed");
    }
  };

  return (
    <div>
      <Modal>
        <Button variant="secondary">Login</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <ArrowRightToSquare className='text-2xl'></ArrowRightToSquare>
                </Modal.Icon>
                <Modal.Heading>Login Form</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <TextField className="w-full" type="email" name='email'>
                      <Label>Email</Label>
                      <Input {...register('email')} type='email' placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name='pasword'>
                      <Label>Message</Label>
                      <Input {...register('password')} type='password' placeholder="Enter your password" />
                    </TextField>
                    <h3 className="text-[#9f9e9e]">Dont havent an account? <Signinform>SignIn</Signinform></h3> or
                    <button type='button' onClick={handelGoogle} className='cursor-pointer border text-center font-semibold w-40 py-1 px-4'>Login with Google</button>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type='submit'>Login</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default LoginForm;