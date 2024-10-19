import { Currency, Group, LimitType, OperationType, PaymentMethod, Period, UpdateGroupDto } from "@/root/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useCallback, useEffect, useRef, useState } from "react";
import { deleteGroup, getGroup, updateGroup } from "@/root/endpoints";
import { useNavigate, useParams } from "react-router-dom";

const accountSchema = z.object({
    partner: z.string().min(1, "Enter partner"),
    paymentMethod: z.nativeEnum(PaymentMethod).refine(value => value !== undefined, {
        message: "Select something",
    }),
    mainteiner: z.string().min(1, "Enter maintainer"),
    currency: z.nativeEnum(Currency).refine(value => value !== undefined, {
        message: "Select something",
    }),
    name: z.string().min(1, "Enter name"),
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

type GroupFormInputs = z.infer<typeof accountSchema>;

const AccountGroupFormUpdate: React.FC = () => {
    const { groupId } = useParams<{ groupId: string}>();
    const [group, setGroup] = useState<Group | null>(null)
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<GroupFormInputs>({
        resolver: zodResolver(accountSchema),
    });

    const onSubmit = async (data: GroupFormInputs) => {
        const dto: UpdateGroupDto = {
            paymentMethod: data.paymentMethod,
            mainteiner: data.partner,
            currency: data.currency,
            name: data.name,
            limits: data.limits
        }

        if (group) {
            await updateGroup(dto, group.id);
            navigate("/partner/account-group")
        }
    };

    const fetchGroup = useCallback(async () => {
        if (groupId) {
            const group = await getGroup(groupId);
            setGroup(group);
        }
    }, [groupId])

    useEffect(() => {
        fetchGroup();
    }, [fetchGroup])

    const { fields, append, remove } = useFieldArray({
        control,
        name: "limits",
    });

    const triggerSubmit = () => {
        formRef.current?.requestSubmit();
    };

    useEffect(() => {
        if (group) {
            reset({
                partner: '',
                paymentMethod: group.paymentMethod,
                mainteiner: group.mainteiner,
                currency: group.currency,
                name: group.name,
                limits: group.limits
            })
        }
    }, [group, reset])

    const handleDelete = async () => {
        if (groupId) {
            await deleteGroup(+groupId)
            navigate("/partner/account-group")
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
                                        <h1 data-v-1a0ca1f2="">Create new account group</h1>
                                        <Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                                            <div data-v-1a0ca1f2="" className="row">
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Partner</label>
                                                        <InputGroup>
                                                            <input {...register("partner")} data-v-1a0ca1f2="" id="group-partner" className="form-control" />
                                                        </InputGroup>
                                                        {errors.partner && <p className="text-danger">{errors.partner.message}</p>}
                                                    </div>
                                                </div>
                                                <div data-v-1a0ca1f2="" className="col">
                                                    <div data-v-1a0ca1f2="" className="form-group">
                                                        <label data-v-1a0ca1f2="" className="required">Payment method</label>
                                                        <InputGroup>
                                                            <select {...register("paymentMethod", { valueAsNumber: true })} id="group_method" className="form-control">
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
                                                        <label data-v-1a0ca1f2="" className="required">Maintainer</label>
                                                        <InputGroup>
                                                            <input {...register("mainteiner")} data-v-1a0ca1f2="" id="group-mainteiner" className="form-control" />
                                                        </InputGroup>
                                                        {errors.mainteiner && <p className="text-danger">{errors.mainteiner.message}</p>}
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
                                                <label data-v-1a0ca1f2="" className="required">Name</label>
                                                <InputGroup>
                                                    <input {...register("name")} data-v-1a0ca1f2="" id="group-name" className="form-control" />
                                                </InputGroup>
                                                {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
                                                <button data-v-1a0ca1f2="" onClick={handleDelete} className="btn btn-danger">Delete</button>
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

export default AccountGroupFormUpdate;