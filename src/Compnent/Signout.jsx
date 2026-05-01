import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';

const Signout = async() => {

    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                router.push("/login"); // redirect to login page
            },
        },
    });

    return (
        <div>
            <Button variant="secondary">Sign out</Button>
        </div>
    );
};

export default Signout;