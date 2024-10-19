import { AccountType, CreateAccountDto, Currency, Group, LimitType, OperationType, PaymentMethod, Period } from "@/root/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { addAccount, getAllGroups } from "@/root/endpoints";
import { useNavigate } from "react-router-dom";

const accountSchema = z.object({
    paymentMethod: z.nativeEnum(PaymentMethod).refine(value => value !== undefined, {
        message: "Select something",
    }),
    number: z.string().regex(/^\+\d{11}$/, {
        message: "Телефон должен быть в формате +79194701077 (11 цифр после '+')",
    }),
    currency: z.nativeEnum(Currency).refine(value => value !== undefined, {
        message: "Select something",
    }),
    groupId: z.number().refine(value => value !== undefined, {
        message: "Select something",
    }),
    bank: z.string().min(1, "Enter bank name"),
    bankBic: z.string().min(1, "Enter bank BIC"),
    paymentReceiver: z.string().min(1, "Enter payment receiver"),
    alias: z.string().min(1, "Enter alias"),
    accountType: z.any(),
    priority: z.boolean(),
    limits: z.array(z.object({
        operationType: z.nativeEnum(OperationType).refine(value => value !== undefined, {
            message: "Select something",
        }),
        limitType: z.nativeEnum(LimitType).refine(value => value !== undefined, {
            message: "Limit cannot be null",
        }),
        limitValue: z.number(),
        period: z.nativeEnum(Period).refine(value => value !== undefined, {
            message: "Select something",
        })
    })).optional()
});

type AccountFormInputs = z.infer<typeof accountSchema>;

const AccountForm: React.FC = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
 

    const { register, handleSubmit, control, formState: { errors } } = useForm<AccountFormInputs>({
        resolver: zodResolver(accountSchema),
    });

    const onSubmit = async (data: AccountFormInputs) => {
        const dto: CreateAccountDto = {
            paymentMethod: data.paymentMethod,
            number: data.number,
            currency: data.currency,
            groupId: data.groupId,
            bank: data.bank,
            bankBIC: data.bankBic,
            paymentReceiver: data.paymentReceiver,
            alias: data.alias,
            accountType: +data.accountType,
            priority: data.priority,
            limits: data.limits
        }

        await addAccount(dto);
        navigate("/partner/account")
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: "limits",
    });

    const triggerSubmit = () => {
        formRef.current?.requestSubmit();
    };

    const fetchGroups = async () => {
        const groups = await getAllGroups();
        setGroups(groups)
    }

    useEffect(() => {
        fetchGroups();
    }, [])

    return (
        <div className="content-wrapper" style={{ minHeight: "938.4px" }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0"></h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            </ol>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div id="alerts"><div className="user-alerts"></div></div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="app">
                                <div data-v-1a0ca1f2="" className="card">
                                    <div data-v-1a0ca1f2="" className="card-body">
                                        <h1 data-v-1a0ca1f2="">Create new Account</h1>
                                        <Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                                            <div data-v-1a0ca1f2="" className="row">
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Payment method</label>
                                                        <InputGroup>
                                                            <select {...register("paymentMethod", { valueAsNumber: true })} id="account_method" className="form-control">
                                                                {Object.entries(PaymentMethod).map(([key, value]) => (
                                                                    typeof value === 'number' ? (
                                                                        <option key={key} value={value}>
                                                                            {key}
                                                                        </option>
                                                                    ) : null
                                                                ))}
                                                            </select>
                                                        </InputGroup>
                                                        {errors.paymentMethod && <p className="text-danger">{errors.paymentMethod.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="row">
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Number</label>
                                                        <InputGroup>
                                                            <input {...register("number")} data-v-1a0ca1f2="" id="account-number" className="form-control" />
                                                        </InputGroup>
                                                        {errors.number && <p className="text-danger">{errors.number.message}</p>}
                                                    </div>
                                                </div>
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Currency</label>
                                                        <InputGroup>
                                                            <select {...register("currency", { valueAsNumber: true })} data-v-1a0ca1f2="" id="currency" className="form-control">
                                                                {Object.entries(Currency).map(([key, value]) => (
                                                                    typeof value === 'number' ? (
                                                                        <option key={key} value={value}>
                                                                            {key}
                                                                        </option>
                                                                    ) : null
                                                                ))}
                                                            </select>
                                                        </InputGroup>
                                                        {errors.currency && <p className="text-danger">{errors.currency.message}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="form-group">
                                                <label data-v-1a0ca1f2="" className="required">Group</label>
                                                <InputGroup>
                                                    <select {...register("groupId", { valueAsNumber: true })} data-v-1a0ca1f2="" id="account_group" className="form-control">
                                                        {groups.map((group) => (
                                                                <option key={group.id} value={group.id}>
                                                                    {group.name}
                                                                </option>
                                                        ))}
                                                    </select>
                                                </InputGroup>
                                                {errors.groupId && <p className="text-danger">{errors.groupId.message}</p>}
                                            </div>
                                            <div data-v-1a0ca1f2="" className="form-group">
                                                <div data-v-1a0ca1f2="" className="row">
                                                    <div data-v-1a0ca1f2="" className="col">
                                                        <div data-v-1a0ca1f2="" className="form-group">
                                                            <label data-v-1a0ca1f2="" className="required">Bank</label>
                                                            <InputGroup>
                                                                <input {...register("bank")} data-v-1a0ca1f2="" id="account_bank" className="form-control" />
                                                            </InputGroup>
                                                            {errors.bank && <p className="text-danger">{errors.bank.message}</p>}
                                                        </div>
                                                    </div>
                                                    <div data-v-1a0ca1f2="" className="col">
                                                        <div data-v-1a0ca1f2="" className="form-group">
                                                            <label data-v-1a0ca1f2="" className="required">Bank BIC</label>
                                                            <InputGroup>
                                                                <input {...register("bankBic")} data-v-1a0ca1f2="" id="bank-bic" className="form-control" />
                                                            </InputGroup>
                                                            {errors.bankBic && <p className="text-danger">{errors.bankBic.message}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="form-group">
                                                <label data-v-1a0ca1f2="" className="required">Payment receiver</label>
                                                <InputGroup>
                                                    <input {...register("paymentReceiver")} data-v-1a0ca1f2="" id="account_payment_receiver" className="form-control" />
                                                </InputGroup>
                                                {errors.paymentReceiver && <p className="text-danger">{errors.paymentReceiver.message}</p>}
                                            </div>
                                            <div data-v-1a0ca1f2="" className="form-group">
                                                <label data-v-1a0ca1f2="" className="required">Alias</label>
                                                <InputGroup>
                                                    <input {...register("alias")} data-v-1a0ca1f2="" id="account-alias" className="form-control" />
                                                </InputGroup>
                                                {errors.alias && <p className="text-danger">{errors.alias.message}</p>}
                                            </div>
                                            <fieldset data-v-1a0ca1f2="" className="form-group">
                                                <legend data-v-1a0ca1f2="" className="col-form-label required">Account type</legend>
                                                <div data-v-1a0ca1f2="" id="account_type">
                                                    {Object.entries(AccountType).map(([key, value]) => (
                                                        typeof value === 'number' ? (
                                                            <div key={value} className="form-check">
                                                                <input
                                                                    {...register("accountType")}
                                                                    type="radio"
                                                                    id={`account_type_${value}`}
                                                                    value={value}
                                                                    className="form-check-input"
                                                                    defaultChecked={value === 0}
                                                                />
                                                                <label htmlFor={`account_type_${value}`} className="form-check-label">
                                                                    {key.replace('_', '')}
                                                                </label>
                                                            </div>
                                                        ) : null
                                                    ))}
                                                </div>
                                            </fieldset>
                                            <fieldset data-v-1a0ca1f2="" className="form-group">
                                                <legend data-v-1a0ca1f2="" className="col-form-label required">Priority</legend>
                                                <div data-v-1a0ca1f2="" id="account_type">
                                                    <div data-v-1a0ca1f2="" className="form-check">
                                                        <InputGroup>
                                                            <input {...register("priority")} data-v-1a0ca1f2="" id="priority" type="checkbox" className="form-check-input" />
                                                        </InputGroup>
                                                        <label data-v-1a0ca1f2="" className="form-check-label required">priority account</label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div data-v-1a0ca1f2="" className="row">
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <h1 data-v-1a0ca1f2="">Limits</h1>
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th className="text-center">ID</th>
                                                                <th className="text-center">Operation Type</th>
                                                                <th className="text-center">Limit Type</th>
                                                                <th className="text-center">Limit Value</th>
                                                                <th className="text-center">Period</th>
                                                                <th className="text-center"></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {fields.map((field, index) => (
                                                                <tr key={field.id}>
                                                                    <td className="text-center">{index + 1}</td>
                                                                    <td className="text-center">
                                                                        <select {...register(`limits.${index}.operationType`, { valueAsNumber: true })} data-v-1a0ca1f2="" id="account_group" className="form-control">
                                                                            {Object.entries(OperationType).map(([key, value]) => (
                                                                                typeof value === 'number' ? (
                                                                                    <option key={key} value={value}>
                                                                                        {key}
                                                                                    </option>
                                                                                ) : null
                                                                            ))}
                                                                        </select>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <select {...register(`limits.${index}.limitType`, { valueAsNumber: true })} data-v-1a0ca1f2="" id="account_group" className="form-control">
                                                                            {Object.entries(LimitType).map(([key, value]) => (
                                                                                typeof value === 'number' ? (
                                                                                    <option key={key} value={value}>
                                                                                        {key}
                                                                                    </option>
                                                                                ) : null
                                                                            ))}
                                                                        </select>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <InputGroup>
                                                                            <input
                                                                                {...register(`limits.${index}.limitValue`)}
                                                                                className="form-control"

                                                                            />
                                                                        </InputGroup>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <select {...register(`limits.${index}.period`, { valueAsNumber: true })} data-v-1a0ca1f2="" id="account_group" className="form-control">
                                                                            {Object.entries(Period).map(([key, value]) => (
                                                                                typeof value === 'number' ? (
                                                                                    <option key={key} value={value}>
                                                                                        {key}
                                                                                    </option>
                                                                                ) : null
                                                                            ))}
                                                                        </select>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button type="button" onClick={() => remove(index)} className="btn btn-danger">Delete</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <div className="row">
                                                        <div className="col mb-2">
                                                            <button onClick={() => append({ operationType: OperationType.inverse_out, limitType: LimitType.amount, limitValue: 0, period: Period.day })} className="btn btn-success">Add new limit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Form>
                                        <div data-v-1a0ca1f2="" className="row">
                                            <div data-v-1a0ca1f2="" className="col-4 d-sm-flex justify-content-sm-center">
                                                <Button type="submit" onClick={triggerSubmit} data-v-1a0ca1f2="" className="btn btn-success">Save</Button>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="col-4 d-sm-flex justify-content-sm-center">
                                                <button data-v-1a0ca1f2="" className="btn btn-danger">Delete</button>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="col-4 d-sm-flex justify-content-sm-center">
                                                <a data-v-1a0ca1f2="" href="/partner/account/" className="btn btn-default">back to list</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountForm;