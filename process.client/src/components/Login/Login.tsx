import { Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/services/authService"
import { useStateContext } from '@/contexts/ContextProvider'

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
    const { setKcResponse } = useStateContext();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormInputs) => {
        const response = await login(data.email, data.password);
        setKcResponse(response);
    };

    return (
        <div className="w-100 full-height d-flex justify-content-center align-items-center" style={{ height: "100vh", background: "#e9ecef" }}>
            <div className="login-box">
                <div className="login-logo">
                    <a href="/user/"><b>Operation Manual Change Admin </b></a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        {(errors.email || errors.password) && <div>Invalid credentials.</div>}
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <InputGroup className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    {...register("password")}
                                />
                            </InputGroup>

                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
