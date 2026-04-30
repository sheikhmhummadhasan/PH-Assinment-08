import { Envelope } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { ArrowRightToSquare } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';
import Signinform from './Signinform';

const LoginForm = () => {
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
                  <form className="flex flex-col gap-4">
                    <TextField className="w-full" name="email" type="email">
                      <Label>Email</Label>
                      <Input name='email' placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="message">
                      <Label>Message</Label>
                      <Input name='password' type='password' placeholder="Enter your password" />
                    </TextField>
                    <h3 className="text-[#9f9e9e]">Dont havent an account? <Signinform>SignIn</Signinform></h3>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type='submit' slot="close">Login</Button>
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