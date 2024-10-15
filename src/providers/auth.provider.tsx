import { FC, ReactNode } from "react";

interface AuthProviderProps {
    children: ReactNode; // Define the type for children
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    // Implement your authentication logic here, e.g., context provider setup
    return (
        <div>
            {children} {/* Render the children passed to the provider */}
        </div>
    );
};

export default AuthProvider;
