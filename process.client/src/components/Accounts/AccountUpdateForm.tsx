import { deleteAccount, getAccount, getAllGroups, updateAccount } from "@/root/endpoints";
import { Account, AccountType, getEnumString, Group, LimitType, OperationType, Period, Status, UpdateAccountDto } from "@/root/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { Form, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

const accountSchema = z.object({
    number: z.string().regex(/^\+\d{11}$/, {
        message: "Телефон должен быть в формате +79194701077 (11 цифр после '+')",
    }),
    groupId: z.number().refine(value => value !== undefined, {
        message: "Select something",
    }),
    alias: z.string().min(1, "Enter alias"),
    accountType: z.any(),
    priority: z.boolean(),
    status: z.any(),
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

const AccountUpdateForm: React.FC = () => {
    const { accountId } = useParams<{ accountId: string }>();
    const [groups, setGroups] = useState<Group[]>([]);
    const [account, setAccount] = useState<Account | null>(null)
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<AccountFormInputs>({
        resolver: zodResolver(accountSchema),
    });

    const onSubmit = async (data: AccountFormInputs) => {
        const dto: UpdateAccountDto = {
            number: data.number,
            groupId: data.groupId,
            alias: data.alias,
            accountType: +data.accountType,
            priority: data.priority,
            status: +data.status,
            limits: data.limits
        }

        if (account) {
            await updateAccount(dto, account.id);
            navigate("/partner/account")
        }
    }

    const fetchAccount = useCallback(async () => {
        if (accountId) {
            const account = await getAccount(accountId);
            setAccount(account);
        }
    }, [accountId]);

    useEffect(() => {
        fetchAccount();
    }, [fetchAccount])

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

    useEffect(() => {
        if (account) {
            reset({
                number: account.number,
                groupId: account.groupId,
                alias: account.alias,
                accountType: account.accountType,
                priority: account.priority,
                status: account.status,
                limits: account.limits
            });
        }
    }, [account, reset]);

    const handleDelete = async () => {
        if (accountId) {
            await deleteAccount(+accountId)
            navigate("/partner/account")
        }
    }

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
                                        <h1 data-v-1a0ca1f2="">Edit Account</h1>
                                        <Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                                            <div data-v-1a0ca1f2="" className="row">
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Payment method</label>
                                                        <select disabled id="account_method" className="form-control">
                                                            <option>
                                                                {account && getEnumString("PaymentMethod", account.paymentMethod)}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="row">
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Number</label>
                                                        <InputGroup>
                                                            <input  {...register("number")} data-v-1a0ca1f2="" id="account-number" className="form-control" />
                                                        </InputGroup>
                                                        {errors.number && <p className="text-danger">{errors.number.message}</p>}
                                                    </div>
                                                </div>
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Currency</label>
                                                        <select disabled id="account_currency" className="form-control">
                                                            <option>
                                                                {account && getEnumString('Currency', account.currency)}
                                                            </option>
                                                        </select>
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
                                                                <input disabled value={account?.bank} data-v-1a0ca1f2="" id="account_bank" className="form-control" />
                                                            </InputGroup>
                                                        </div>
                                                    </div>
                                                    <div data-v-1a0ca1f2="" className="col">
                                                        <div data-v-1a0ca1f2="" className="form-group">
                                                            <label data-v-1a0ca1f2="" className="required">Bank BIC</label>
                                                            <InputGroup>
                                                                <input disabled value={account?.bankBIC} data-v-1a0ca1f2="" id="bank-bic" className="form-control" />
                                                            </InputGroup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="form-group">
                                                <label data-v-1a0ca1f2="" className="required">Payment receiver</label>
                                                <InputGroup>
                                                    <input disabled value={account?.paymentReceiver} data-v-1a0ca1f2="" id="account_payment_receiver" className="form-control" />
                                                </InputGroup>
                                            </div>
                                            <div data-v-1a0ca1f2="" className="form-group">
                                                <label data-v-1a0ca1f2="" className="required">Alias</label>
                                                <InputGroup>
                                                    <input {...register("alias")} data-v-1a0ca1f2="" id="account-alias" className="form-control" />
                                                </InputGroup>
                                                {errors.alias && <p className="text-danger">{errors.alias.message}</p>}
                                            </div>

                                            <fieldset data-v-1a0ca1f2="" className="form-group">
                                                <legend data-v-1a0ca1f2="" className="col-form-label required">Status</legend>
                                                <div data-v-1a0ca1f2="" id="account_status">
                                                    <div data-v-1a0ca1f2="" className="form-check">
                                                        <input {...register("status")} data-v-1a0ca1f2="" id="account_status0" type="radio" className="form-check-input" value={Status.active}/>
                                                        <label data-v-1a0ca1f2="" className="form-check-label required">active</label>
                                                    </div>
                                                    <div data-v-1a0ca1f2="" className="form-check">
                                                        <input {...register("status")} data-v-1a0ca1f2="" id="account_status1" type="radio" className="form-check-input" value={Status.disabled} />
                                                        <label data-v-1a0ca1f2="" className="form-check-label required">disabled</label>
                                                    </div>
                                                    <div data-v-1a0ca1f2="" className="form-check">
                                                        <input {...register("status")} data-v-1a0ca1f2="" id="account_status2" type="radio" className="form-check-input" value={Status.cooling} />
                                                        <label data-v-1a0ca1f2="" className="form-check-label required">cooling</label>
                                                    </div>
                                                    <div data-v-1a0ca1f2="" className="form-check">
                                                        <input defaultChecked {...register("status")} data-v-1a0ca1f2="" id="account_status3" type="radio" className="form-check-input" value={Status.no_collaborators} />
                                                        <label data-v-1a0ca1f2="" className="form-check-label required">no_collaborators</label>
                                                    </div>
                                                    <div data-v-1a0ca1f2="" className="form-check">
                                                        <input {...register("status")} data-v-1a0ca1f2="" id="account_status4" type="radio" className="form-check-input" value={Status.blocked} />
                                                        <label data-v-1a0ca1f2="" className="form-check-label required">blocked</label>
                                                    </div>
                                                </div>
                                            </fieldset>

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

                                            <div data-v-1a0ca1f2="" className="form-group">
                                                <label data-v-1a0ca1f2="">Qr code for mobile app settings</label>
                                                <div data-v-1a0ca1f2="" className="row">
                                                    <div data-v-1a0ca1f2="">
                                                        <img
                                                            src="/qr.png"
                                                            alt="QR Code"
                                                            height="375"
                                                            width="375"
                                                            style={{ width: '300px', height: '300px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>


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
                                                <button data-v-1a0ca1f2="" className="btn btn-danger" onClick={handleDelete}>Delete</button>
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

export default AccountUpdateForm;