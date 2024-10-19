import { getAllAccounts, getAllGroups } from "@/root/endpoints";
import { Account, AccountType, getEnumString, Group, PaymentMethod, Status } from "@/root/types";
import { useEffect, useState } from "react";
import { DropdownToggle } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

const Accounts: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<Status>(Status.active);

    const [accounts, setAccounts] = useState<Account[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [filteredAccounts, setFilteredAccounts] = useState<Account[]>([]);

    const [paymentMethodFilter, setPaymentMethodFilter] = useState<PaymentMethod | string>("");
    const [groupFilter, setGroupFilter] = useState(0);
    const [accountTypeFilter, setAccountTypeFilter] = useState<AccountType | string>("");
    const [statusFilter, setStatusFilter] = useState<Status | string>("");
    const [numberFilter, setNumberFilter] = useState("");
    const [bankFilter, setBankFilter] = useState("");
    const [aliasFilter, setAliasFilter] = useState("");

    const fetchAccounts = async () => {
        const accounts = await getAllAccounts();
        setAccounts(accounts);
    }

    const fetchGroups = async () => {
        const groups = await getAllGroups();
        setGroups(groups)
    }

    useEffect(() => {
        fetchAccounts();
        fetchGroups();
    }, [])

    const resetFilters = () => {
        setPaymentMethodFilter("");
        setGroupFilter(0);
        setAccountTypeFilter("");
        setStatusFilter("");
        setNumberFilter("");
        setBankFilter("");
        setAliasFilter("");
    };

    useEffect(() => {
        const filterAccounts = () => {
            return accounts.filter(account => {
                const matchesPaymentMethod = paymentMethodFilter ? account.paymentMethod === paymentMethodFilter : true;
                const matchesGroup = groupFilter ? account.groupId === groupFilter : true;
                const matchesAccountType = accountTypeFilter ? account.accountType === accountTypeFilter : true;
                const matchesStatus = statusFilter ? account.status === statusFilter : true;
                const matchesNumber = numberFilter ? account.number.includes(numberFilter) : true;
                const matchesBank = bankFilter ? account.bank.includes(bankFilter) : true;
                const matchesAlias = aliasFilter ? account.alias.includes(aliasFilter) : true;

                const matchesTable = () => {
                    switch (selectedTable as number) {
                        case Status.active:
                            return (
                                account.status === Status.active as number ||
                                account.status === Status.cooling as number ||
                                account.status === Status.no_collaborators as number
                            );
                        case Status.blocked:
                            return account.status === Status.blocked as number;
                        case Status.disabled:
                            return account.status === Status.disabled as number;
                        default:
                            return false;
                    }
                };

                return (
                    matchesPaymentMethod &&
                    matchesGroup &&
                    matchesAccountType &&
                    matchesStatus &&
                    matchesNumber &&
                    matchesBank &&
                    matchesAlias &&
                    matchesTable()
                );
            });
        };

        setFilteredAccounts(filterAccounts());
    }, [accounts, paymentMethodFilter, groupFilter, accountTypeFilter, statusFilter, numberFilter, bankFilter, aliasFilter, selectedTable]);



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
                                    <div data-v-5a4733c2="" className="card card-primary card-tabs">
                                        <div data-v-5a4733c2="" className="card-header p-0 pt-1">
                                            <ul data-v-5a4733c2="" className="nav nav-tabs nav-justified">
                                                <li data-v-5a4733c2="" className="nav-item">
                                                    <a data-v-5a4733c2="" href="#" className={`nav-link ${selectedTable === Status.active ? 'active' : ''}`} onClick={() => setSelectedTable(Status.active)}>Active accounts</a>
                                                </li>
                                                <li data-v-5a4733c2="" className="nav-item">
                                                    <a data-v-5a4733c2="" href="#" className={`nav-link ${selectedTable === Status.disabled ? 'active' : ''}`} onClick={() => setSelectedTable(Status.disabled)}>Disabled accounts</a>
                                                </li>
                                                <li data-v-5a4733c2="" className="nav-item">
                                                    <a data-v-5a4733c2="" href="#" className={`nav-link ${selectedTable === Status.blocked ? 'active' : ''}`} onClick={() => setSelectedTable(Status.blocked)}>Blocked accounts</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div data-v-5a4733c2="" className="card-body">
                                            <div data-v-5a4733c2="" className="row">
                                                <div data-v-5a4733c2="" className="col mb-2">
                                                    <div data-v-5a4733c2="" className="btn-toolbar float-left">
                                                        <a data-v-5a4733c2="" className="btn btn-info" onClick={resetFilters}>Reset filters</a>
                                                    </div>
                                                </div>
                                                <div data-v-5a4733c2="" className="col mb-2">
                                                    <div data-v-5a4733c2="" className="btn-toolbar float-right">
                                                        <a data-v-5a4733c2="" href="/partner/account/new" className="btn btn-success">Create new</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-5a4733c2="" className="row">
                                                <div data-v-5a4733c2="" className="col" style={{ fontSize: "0.8rem" }}>
                                                    <table data-v-5a4733c2="" className="table table-bordered table-striped">
                                                        <thead data-v-5a4733c2="">
                                                            <tr data-v-5a4733c2="" role="row" className="text-center">
                                                                <th data-v-5a4733c2="">Payment method</th>
                                                                <th data-v-5a4733c2="">Group</th>
                                                                <th data-v-5a4733c2="">Number</th>
                                                                <th data-v-5a4733c2="">Bank</th>
                                                                <th data-v-5a4733c2="">Currency</th>
                                                                <th data-v-5a4733c2="">Alias</th>
                                                                <th data-v-5a4733c2="">Account type</th>
                                                                <th data-v-5a4733c2="">Account priority</th>
                                                                <th data-v-5a4733c2="">Status</th>
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
                                                                            <Dropdown role="combobox" className="vs__dropdown-toggle">
                                                                                <DropdownToggle className="vs__search" style={{ width: 'auto', minWidth: 'fit-content' }}>
                                                                                    {groupFilter !== 0 && groups.find(g => g.id === groupFilter)?.name

                                                                                    }
                                                                                    <Dropdown.Menu>
                                                                                        {groups && groups.map((group) => (
                                                                                            <Dropdown.Item key={group.id} onClick={() => setGroupFilter(group.id)}>
                                                                                                {group.name}
                                                                                            </Dropdown.Item>
                                                                                        ))}
                                                                                    </Dropdown.Menu>
                                                                                </DropdownToggle>
                                                                            </Dropdown>
                                                                            <ul id="vs2__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td data-v-5a4733c2="">
                                                                    <div data-v-5a4733c2="" className="form-group">
                                                                        <input data-v-5a4733c2="" placeholder="number" type="text" className="form-control" onChange={(e) => setNumberFilter(e.target.value)} value={numberFilter} />
                                                                    </div>
                                                                </td>
                                                                <td data-v-5a4733c2="">
                                                                    <div data-v-5a4733c2="" className="form-group">
                                                                        <input data-v-5a4733c2="" placeholder="bank" type="text" className="form-control" onChange={(e) => setBankFilter(e.target.value)} value={bankFilter} />
                                                                    </div>
                                                                </td>
                                                                <td data-v-5a4733c2="">
                                                                </td>
                                                                <td data-v-5a4733c2="">
                                                                    <div data-v-5a4733c2="" className="form-group">
                                                                        <input data-v-5a4733c2="" placeholder="alias" type="text" className="form-control" onChange={(e) => setAliasFilter(e.target.value)} value={aliasFilter} />
                                                                    </div>
                                                                </td>
                                                                <td data-v-5a4733c2="">
                                                                    <div data-v-5a4733c2="" className="form-group">
                                                                        <div data-v-5a4733c2="" dir="auto" className="v-select vs--single vs--searchable">
                                                                            <Dropdown role="combobox" className="vs__dropdown-toggle">
                                                                                <DropdownToggle className="vs__search" style={{ width: 'auto', minWidth: 'fit-content' }}>
                                                                                    {accountTypeFilter === ""
                                                                                        ? accountTypeFilter
                                                                                        : typeof accountTypeFilter === 'number'
                                                                                            ? getEnumString('AccountType', accountTypeFilter)
                                                                                            : null
                                                                                    }
                                                                                    <Dropdown.Menu>
                                                                                        {Object.entries(AccountType).map(([key, value]) => (
                                                                                            typeof value === 'number' ? (
                                                                                                <Dropdown.Item key={value} onClick={() => setAccountTypeFilter(value)}>
                                                                                                    {key}
                                                                                                </Dropdown.Item>
                                                                                            ) : null
                                                                                        ))}
                                                                                    </Dropdown.Menu>
                                                                                </DropdownToggle>
                                                                            </Dropdown>
                                                                            <ul id="vs3__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td data-v-5a4733c2="">
                                                                    <div data-v-5a4733c2="" className="form-group">
                                                                        <div data-v-5a4733c2="" dir="auto" className="v-select vs--single vs--searchable">
                                                                            <div id="vs4__combobox" role="combobox" aria-expanded="false" aria-owns="vs4__listbox" aria-label="Search for option" className="vs__dropdown-toggle">
                                                                                <div className="vs__selected-options">
                                                                                    <span className="vs__selected">
                                                                                    </span>
                                                                                    <input aria-autocomplete="list" aria-labelledby="vs4__combobox" aria-controls="vs4__listbox" type="search" className="vs__search" />
                                                                                </div>
                                                                                <div className="vs__actions">
                                                                                    <button type="button" title="Clear Selected" aria-label="Clear Selected" className="vs__clear">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                                                            <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                                                                                        </svg>
                                                                                    </button>
                                                                                    <svg data-v-12ed6176="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="presentation" className="vs__open-indicator">
                                                                                        <polygon data-v-12ed6176="" points="18.43 7.72 19.5 8.78 12 16.28 4.5 8.78 5.57 7.72 12 14.16 18.43 7.72" style={{ strokeWidth: 1 }}>
                                                                                        </polygon>
                                                                                    </svg>
                                                                                    <div className="vs__spinner" style={{ display: "none" }}>Loading...</div>
                                                                                </div>
                                                                            </div>
                                                                            <ul id="vs4__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td data-v-5a4733c2="">
                                                                    <div data-v-5a4733c2="" className="form-group">
                                                                        <div data-v-5a4733c2="" dir="auto" className="v-select vs--single vs--searchable">
                                                                            <Dropdown role="combobox" className="vs__dropdown-toggle">
                                                                                <DropdownToggle className="vs__search" style={{ width: 'auto', minWidth: 'fit-content' }}>
                                                                                    {statusFilter === ""
                                                                                        ? statusFilter
                                                                                        : typeof statusFilter === 'number'
                                                                                            ? getEnumString('Status', statusFilter)
                                                                                            : null
                                                                                    }
                                                                                    <Dropdown.Menu>
                                                                                        {Object.entries(Status).map(([key, value]) => (
                                                                                            typeof value === 'number' ? (
                                                                                                <Dropdown.Item key={value} onClick={() => setStatusFilter(value)}>
                                                                                                    {key}
                                                                                                </Dropdown.Item>
                                                                                            ) : null
                                                                                        ))}
                                                                                    </Dropdown.Menu>
                                                                                </DropdownToggle>
                                                                            </Dropdown>
                                                                            <ul id="vs5__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            {filteredAccounts.map((account) => (
                                                                <tr data-v-5a4733c2="">
                                                                    <td data-v-5a4733c2="">{getEnumString('PaymentMethod', account.paymentMethod)}</td>
                                                                    <td data-v-5a4733c2="">{account.groupId && groups.find(g => g.id === account.groupId)?.name}</td>
                                                                    <td data-v-5a4733c2="">
                                                                        <a data-v-5a4733c2="" href={`/partner/account/${account.id}/edit`}>{account.number}</a>
                                                                    </td>
                                                                    <td data-v-5a4733c2="">{account.bank}</td>
                                                                    <td data-v-5a4733c2="">{getEnumString('Currency', account.currency)}</td>
                                                                    <td data-v-5a4733c2="">{account.alias}</td>
                                                                    <td data-v-5a4733c2="">{getEnumString('AccountType', account.accountType)}</td>
                                                                    <td data-v-5a4733c2="">{account.priority ? 2 : 1}</td>
                                                                    <td data-v-5a4733c2="">{getEnumString('Status', account.status)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        <tfoot data-v-5a4733c2="">
                                                            <tr data-v-5a4733c2="" className="text-center">
                                                                <th data-v-5a4733c2="">Payment method</th>
                                                                <th data-v-5a4733c2="">Group</th>
                                                                <th data-v-5a4733c2="">Number</th>
                                                                <th data-v-5a4733c2="">Bank</th>
                                                                <th data-v-5a4733c2="">Currency</th>
                                                                <th data-v-5a4733c2="">Alias</th>
                                                                <th data-v-5a4733c2="">Account type</th>
                                                                <th data-v-5a4733c2="">Account priority</th>
                                                                <th data-v-5a4733c2="">Status</th>
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
    );
}

export default Accounts;