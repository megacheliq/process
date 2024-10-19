import { getAllGroups } from "@/root/endpoints";
import { getEnumString, Group, PaymentMethod } from "@/root/types";
import { useEffect, useState } from "react";
import { Dropdown, DropdownToggle } from "react-bootstrap";

const AccountGroups: React.FC = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);
    const [openDropdown, setOpenDropdown] = useState(0);
    const [paymentMethodFilter, setPaymentMethodFilter] = useState<PaymentMethod | string>("");

    const fetchGroups = async () => {
        const groups = await getAllGroups();
        setGroups(groups)
    }

    useEffect(() => {
        fetchGroups();
    }, [])

    const resetFilters = () => {
        setPaymentMethodFilter("");
    };

    useEffect(() => {
        const filterGroups = () => {
            return groups.filter(account => {
                const matchesPaymentMethod = paymentMethodFilter ? account.paymentMethod === paymentMethodFilter : true;


                return (
                    matchesPaymentMethod
                );
            });
        };

        setFilteredGroups(filterGroups());
    }, [paymentMethodFilter, groups]);

    const toggleDropdown = (id: number) => {
        setOpenDropdown(prevId => (prevId === id ? 0 : id));
    };

    return (
        <div className="content-wrapper" style={{ minHeight: "924.4px" }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">
                            </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            </ol>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div id="alerts">
                            <div className="user-alerts">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="app">
                                <div data-v-5a4733c2="">
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 data-v-5ab4f49f="">Account groups</h1>
                                            <div data-v-5a4733c2="" className="card-body">
                                                <div data-v-5a4733c2="" className="row">
                                                    <div data-v-5a4733c2="" className="col mb-2">
                                                        <div data-v-5a4733c2="" className="btn-toolbar float-left">
                                                            <a data-v-5a4733c2="" className="btn btn-info" onClick={resetFilters}>Reset filters</a>
                                                        </div>
                                                    </div>
                                                    <div data-v-5a4733c2="" className="col mb-2">
                                                        <div data-v-5a4733c2="" className="btn-toolbar float-right">
                                                            <a data-v-5a4733c2="" href="/partner/account-group/new" className="btn btn-success">Create new</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-5a4733c2="" className="row">
                                                    <div data-v-5a4733c2="" className="col" style={{ fontSize: "0.8rem" }}>
                                                        <table data-v-5a4733c2="" className="table table-bordered table-striped">
                                                            <thead data-v-5a4733c2="">
                                                                <tr data-v-5a4733c2="" role="row" className="text-center">
                                                                    <th data-v-5a4733c2="">Payment method</th>
                                                                    <th data-v-5a4733c2="">Maintainer</th>
                                                                    <th data-v-5a4733c2="">Name</th>
                                                                    <th data-v-5a4733c2="">Operators</th>
                                                                    <th data-v-5a4733c2="">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody data-v-5a4733c2="">
                                                                <tr data-v-5a4733c2="" className="text-center">
                                                                    <td data-v-5a4733c2="">
                                                                        <div data-v-5a4733c2="" className="form-group">
                                                                            <div data-v-5a4733c2="" dir="auto" className="v-select vs--single vs--searchable">
                                                                                <Dropdown role="combobox" className="vs__dropdown-toggle">
                                                                                    <DropdownToggle className="vs__search" style={{ width: 'auto', minWidth: 'fit-content' }}>
                                                                                        {paymentMethodFilter === ""
                                                                                            ? paymentMethodFilter
                                                                                            : typeof paymentMethodFilter === 'number'
                                                                                                ? getEnumString('PaymentMethod', paymentMethodFilter)
                                                                                                : null
                                                                                        }
                                                                                        <Dropdown.Menu>
                                                                                            {Object.entries(PaymentMethod).map(([key, value]) => (
                                                                                                typeof value === 'number' ? (
                                                                                                    <Dropdown.Item key={value} onClick={() => setPaymentMethodFilter(value)}>
                                                                                                        {key}
                                                                                                    </Dropdown.Item>
                                                                                                ) : null
                                                                                            ))}
                                                                                        </Dropdown.Menu>
                                                                                    </DropdownToggle>
                                                                                </Dropdown>
                                                                                <ul id="vs1__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td data-v-5a4733c2="">
                                                                        <div data-v-5a4733c2="" className="form-group">
                                                                            <div data-v-5a4733c2="" dir="auto" className="v-select vs--single vs--searchable">
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td data-v-5a4733c2="">
                                                                        <div data-v-5a4733c2="" className="form-group">
                                                                        </div>
                                                                    </td>
                                                                    <td data-v-5a4733c2="">
                                                                        <div data-v-5a4733c2="" className="form-group">
                                                                        </div>
                                                                    </td>
                                                                    <td data-v-5a4733c2="">
                                                                    </td>
                                                                </tr>
                                                                {filteredGroups.map((group) => (
                                                                    <tr data-v-5a4733c2="">
                                                                        <td data-v-5a4733c2="">{getEnumString('PaymentMethod', group.paymentMethod)}</td>
                                                                        <td data-v-5a4733c2="">{group.mainteiner}</td>
                                                                        <td data-v-5a4733c2="">
                                                                            <a data-v-5a4733c2="" href={`/partner/account-group/${group.id}/edit`}>{group.name}</a>
                                                                        </td>
                                                                        <td data-v-5ab4f49f="" className="align-middle">
                                                                            <ul data-v-5ab4f49f="" className="list-unstyled">
                                                                                <li data-v-5ab4f49f="">
                                                                                    <span data-v-5ab4f49f="" className="online-dot offline">
                                                                                    </span>
                                                                                    <span data-v-5ab4f49f="" className="info">divideetimpera29@gmail.com</span>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                        <td data-v-5ab4f49f="">
                                                                            <div data-v-5ab4f49f="" className="dropdown show">
                                                                                <a data-v-5ab4f49f="" data-toggle="dropdown" href="#" className="btn btn-default dropdown-toggle" onClick={() => toggleDropdown(group.id)}>
                                                                                    <svg data-v-5ab4f49f="" className="svg-inline--fa fa-cog fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                                        <path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
                                                                                    </svg>
                                                                                </a>
                                                                                <div data-v-5ab4f49f="" className={`dropdown-menu ${openDropdown === group.id ? 'show' : ''}`}>
                                                                                    <a data-v-5ab4f49f="" href="#" className="dropdown-item">
                                                                                        <svg data-v-5ab4f49f="" className="svg-inline--fa fa-users-cog fa-w-20" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="users-cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                                                                            <path fill="currentColor" d="M610.5 341.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 368.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm224 32c1.9 0 3.7-.5 5.6-.6 8.3-21.7 20.5-42.1 36.3-59.2 7.4-8 17.9-12.6 28.9-12.6 6.9 0 13.7 1.8 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4 7-14.6 11.2-30.8 11.2-48 0-61.9-50.1-112-112-112S208 82.1 208 144c0 61.9 50.1 112 112 112zm105.2 194.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-10.7-34.5 24.9-49.7 25.8-50.3-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-3.8-2.2-7-5-9.8-8.1-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h255.4c-3.7-6-6.2-12.8-6.2-20.3v-9.2zM173.1 274.6C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                                                                                        </svg>
                                                                                        Operators
                                                                                    </a>
                                                                                    <a data-v-5ab4f49f="" href="#" className="dropdown-item">
                                                                                        <svg data-v-5ab4f49f="" className="svg-inline--fa fa-power-off fa-w-16 text-success" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="power-off" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                                            <path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path>
                                                                                        </svg>
                                                                                        Set active
                                                                                    </a> <a data-v-5ab4f49f="" href="#" className="dropdown-item">
                                                                                        <svg data-v-5ab4f49f="" className="svg-inline--fa fa-power-off fa-w-16 text-danger" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="power-off" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                                            <path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path>
                                                                                        </svg>
                                                                                        Set disable
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                            <tfoot data-v-5a4733c2="">
                                                                <tr data-v-5a4733c2="" className="text-center">
                                                                    <th data-v-5a4733c2="">Payment method</th>
                                                                    <th data-v-5a4733c2="">Maintainer</th>
                                                                    <th data-v-5a4733c2="">Name</th>
                                                                    <th data-v-5a4733c2="">Operators</th>
                                                                    <th data-v-5a4733c2="">Actions</th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
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
            </div>
        </div>
    )
}

export default AccountGroups;