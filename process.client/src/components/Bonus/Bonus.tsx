import { Table } from "@/root/types";
import { useState } from "react";

const Bonus: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<Table>(Table.New);
    return (
        <div className="content-wrapper" style={{ minHeight: '90vh' }}>
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
                                <div className="card card-primary card-tabs">
                                    <div className="card-header p-0 pt-1">
                                        <ul className="nav nav-tabs nav-justified">
                                            <li className="nav-item">
                                                <a href="#" className={`nav-link ${selectedTable === Table.New ? 'active' : ''}`} onClick={() => setSelectedTable(Table.New)}>New</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className={`nav-link ${selectedTable === Table.InWork ? 'active' : ''}`} onClick={() => setSelectedTable(Table.InWork)}>In work</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className={`nav-link ${selectedTable === Table.History ? 'active' : ''}`} onClick={() => setSelectedTable(Table.History)}>History</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <div className="col">
                                                <div className="btn-toolbar float-right">
                                                    <div className="btn-group mr-2">
                                                    </div>
                                                    <div className="btn-group mr-2">
                                                    </div>
                                                    <div className="btn-group mr-2">
                                                        <div data-v-268d7a58="" className="settings">
                                                            <div data-v-268d7a58="" className="table-settings">
                                                                <div data-v-268d7a58="" className="table-settings__name">
                                                                    <svg data-v-268d7a58="" className="svg-inline--fa fa-cog fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                        <path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z">
                                                                        </path>
                                                                    </svg>
                                                                    Table settings
                                                                    <svg data-v-268d7a58="" className="svg-inline--fa fa-chevron-down fa-w-14" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                                                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                                                    </svg>
                                                                </div>
                                                                <div data-v-268d7a58="" className="table-settings__items" style={{ display: "none" }}>
                                                                    <div data-v-268d7a58="" className="button__switch">
                                                                        <button data-v-268d7a58="" className="btn btn-outline-primary btn-sm">Check All</button>
                                                                        <button data-v-268d7a58="" className="btn btn-outline-primary btn-sm">Uncheck All</button>
                                                                    </div>
                                                                    <div data-v-268d7a58="" className="multiselect"><label data-v-268d7a58="" className="multiselect__list">
                                                                        <input data-v-268d7a58="" type="checkbox" id="operationId" className="list-checkbox" value="[object Object]" />
                                                                        <span data-v-268d7a58="">Operation Id</span>
                                                                    </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="paymentMethod" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Payment Method</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="accountGroup" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Account Group</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="partnerAccount" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Partner Account</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="customerAccountName" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Customer Account Name</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="amount" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Amount</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="currency" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Currency</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="status" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Status</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="identificationInfo" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Identification Info</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="inWorkUser" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Operator</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="actions" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Actions</span>
                                                                        </label>
                                                                        <label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="createdAt" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Created At</span></label><label data-v-268d7a58="" className="multiselect__list">
                                                                            <input data-v-268d7a58="" type="checkbox" id="updatedAt" className="list-checkbox" value="[object Object]" />
                                                                            <span data-v-268d7a58="">Updated At</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group mr-2">
                                                        <button data-target="#download-csv-modal" data-toggle="modal" className="btn btn-secondary btn-block">
                                                            <svg className="svg-inline--fa fa-download fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                                                            </svg>
                                                        </button>
                                                        <div data-v-5190bedc="" id="download-csv-modal" data-backdrop="static" data-keyboard="false" className="modal fade">
                                                            <div data-v-5190bedc="" className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                                                                <div data-v-5190bedc="" className="modal-content">
                                                                    <div data-v-5190bedc="" className="modal-header">
                                                                        Export to CSV
                                                                        <button data-v-5190bedc="" type="button" data-dismiss="modal" aria-label="Close" className="close">
                                                                            <span data-v-5190bedc="" aria-hidden="true">×</span>
                                                                        </button>
                                                                    </div>
                                                                    <div data-v-5190bedc="" className="modal-body">
                                                                        <div data-v-5190bedc="" className="container-fluid">
                                                                            <div data-v-5190bedc="" className="row">
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Status</label>
                                                                                        <select data-v-5190bedc="" className="form-control">
                                                                                            <option data-v-5190bedc="">new</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Amount</label>
                                                                                        <input data-v-5190bedc="" className="form-control" />
                                                                                    </div>
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Origin Amount</label>
                                                                                        <input data-v-5190bedc="" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-v-5190bedc="" className="row">
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Payment Method</label>
                                                                                        <select data-v-5190bedc="" className="form-control">
                                                                                            <option data-v-5190bedc=""></option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Currency</label>
                                                                                        <input data-v-5190bedc="" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-v-5190bedc="" className="row">
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Partner Account</label>
                                                                                        <input data-v-5190bedc="" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Customer Bank</label>
                                                                                        <input data-v-5190bedc="" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-v-5190bedc="" className="row">
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Created At</label>
                                                                                        <input data-v-5190bedc="" id="createdAt-csv-filter-daterange-btn" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Customer Account Name</label>
                                                                                        <input data-v-5190bedc="" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-v-5190bedc="" className="row">
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                </div>
                                                                                <div data-v-5190bedc="" className="col-6">
                                                                                    <div data-v-5190bedc="" className="form-group">
                                                                                        <label data-v-5190bedc="">Customer Account</label>
                                                                                        <input data-v-5190bedc="" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-v-5190bedc="" className="modal-footer">
                                                                        <button data-v-5190bedc="" type="button" className="btn btn-success">Export</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="btn-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <button type="button" className="btn btn-outline-secondary">
                                                                    <svg className="svg-inline--fa fa-sync fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="sync" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                        <path fill="currentColor" d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <select name="timezone" className="form-control">
                                                                <option value="0">
                                                                    Off
                                                                </option>
                                                                <option value="-1">
                                                                    Realtime
                                                                </option>
                                                                <option value="5">
                                                                    5s
                                                                </option>
                                                                <option value="15">
                                                                    15s
                                                                </option>
                                                                <option value="30">
                                                                    30s
                                                                </option>
                                                                <option value="60">
                                                                    1m
                                                                </option>
                                                                <option value="300">
                                                                    5m
                                                                </option>
                                                                <option value="900">
                                                                    15m
                                                                </option>
                                                                <option value="1800">
                                                                    30m
                                                                </option>
                                                                <option value="3600">
                                                                    1h
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" style={{ fontSize: "0.8rem" }}>
                                                <table className="table table-responsive table-bordered table-striped dataTable dtr-inline">
                                                    <thead>
                                                        <tr role="row" className="text-center">
                                                            <th className="sorting">
                                                                Operation Id
                                                            </th>
                                                            <th className="sorting">
                                                                Payment Method
                                                            </th>
                                                            <th className="sorting">
                                                                Account Group
                                                            </th>
                                                            <th className="sorting">
                                                                Partner Account
                                                            </th>
                                                            <th className="sorting">
                                                                Customer Account Name
                                                            </th>
                                                            <th className="sorting">
                                                                Amount
                                                            </th>
                                                            <th className="sorting">
                                                                Currency
                                                            </th>
                                                            <th className="sorting">
                                                                Status
                                                            </th>
                                                            <th className="sorting">
                                                                Identification Info
                                                            </th>
                                                            <th className="sorting">
                                                                Operator
                                                            </th>
                                                            <th className="sorting">
                                                                Actions
                                                            </th>
                                                            <th className="sorting sorting_desc">
                                                                Created At
                                                            </th>
                                                            <th className="sorting">
                                                                Updated At
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center"><div className="form-group">
                                                                <input placeholder="operationId" type="text" className="form-control" />
                                                            </div>
                                                            </td>
                                                            <td className="text-center"><div className="form-group">
                                                                <div dir="auto" className="v-select under-tab vs--single vs--searchable">
                                                                    <div id="vs2__combobox" role="combobox" aria-expanded="false" aria-owns="vs2__listbox" aria-label="Search for option" className="vs__dropdown-toggle">
                                                                        <div className="vs__selected-options">
                                                                            <input aria-autocomplete="list" aria-labelledby="vs2__combobox" aria-controls="vs2__listbox" type="search" className="vs__search" />
                                                                        </div>
                                                                        <div className="vs__actions">
                                                                            <button type="button" title="Clear Selected" aria-label="Clear Selected" className="vs__clear" style={{ display: "none" }}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                                                    <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                                                                                </svg>
                                                                            </button>
                                                                            <svg data-v-12ed6176="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="presentation" className="vs__open-indicator">
                                                                                <polygon data-v-12ed6176="" points="18.43 7.72 19.5 8.78 12 16.28 4.5 8.78 5.57 7.72 12 14.16 18.43 7.72" style={{ strokeWidth: 1 }}></polygon>
                                                                            </svg>
                                                                            <div className="vs__spinner" style={{ display: "none" }}>Loading...</div>
                                                                        </div>
                                                                    </div>
                                                                    <ul id="vs2__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="form-group">
                                                                    <div dir="auto" className="v-select vs--single vs--searchable">
                                                                        <div id="vs3__combobox" role="combobox" aria-expanded="false" aria-owns="vs3__listbox" aria-label="Search for option" className="vs__dropdown-toggle">
                                                                            <div className="vs__selected-options">
                                                                                <input aria-autocomplete="list" aria-labelledby="vs3__combobox" aria-controls="vs3__listbox" type="search" className="vs__search" />
                                                                            </div>
                                                                            <div className="vs__actions">
                                                                                <button type="button" title="Clear Selected" aria-label="Clear Selected" className="vs__clear" style={{ display: "none" }}>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                                                        <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                                                                                    </svg></button> <svg data-v-12ed6176="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="presentation" className="vs__open-indicator">
                                                                                    <polygon data-v-12ed6176="" points="18.43 7.72 19.5 8.78 12 16.28 4.5 8.78 5.57 7.72 12 14.16 18.43 7.72" style={{ strokeWidth: 1 }}>
                                                                                    </polygon>
                                                                                </svg>
                                                                                <div className="vs__spinner" style={{ display: "none" }}>Loading...</div>
                                                                            </div>
                                                                        </div>
                                                                        <ul id="vs3__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center"><div className="form-group">
                                                                <input placeholder="partnerAccount" type="text" className="form-control" />
                                                            </div>
                                                            </td>
                                                            <td className="text-center"><div className="form-group">
                                                                <input placeholder="customerAccountName" type="text" className="form-control" />
                                                            </div>
                                                            </td>
                                                            <td className="text-center"><div className="form-group">
                                                                <input placeholder="amount" type="text" className="form-control" />
                                                            </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="form-group">
                                                                    <input placeholder="currency" type="text" className="form-control" />
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="form-group">
                                                                    <div dir="auto" className="v-select vs--single vs--searchable">
                                                                        <div id="vs4__combobox" role="combobox" aria-expanded="false" aria-owns="vs4__listbox" aria-label="Search for option" className="vs__dropdown-toggle">
                                                                            <div className="vs__selected-options">
                                                                                <input aria-autocomplete="list" aria-labelledby="vs4__combobox" aria-controls="vs4__listbox" type="search" className="vs__search" />
                                                                            </div>
                                                                            <div className="vs__actions">
                                                                                <button type="button" title="Clear Selected" aria-label="Clear Selected" className="vs__clear" style={{ display: "none" }}>
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
                                                            <td className="text-center">
                                                                <div className="form-group">
                                                                    <input placeholder="identificationInfo" type="text" className="form-control" />
                                                                </div>
                                                            </td>
                                                            <td className="text-center"><div className="form-group">
                                                                <input placeholder="inWorkUser" type="text" className="form-control" />
                                                            </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div id="createdAt-daterange-filter" className="input-group">
                                                                    <button id="createdAt-filter-daterange-btn" type="button" className="btn btn-default float-right">
                                                                        <svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                                                            <path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z">
                                                                            </path>
                                                                        </svg>
                                                                        <svg className="svg-inline--fa fa-caret-down fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                                                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                                                        </svg>
                                                                        <span>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr role="row" className="text-center">
                                                            <th className="sorting">
                                                                Operation Id
                                                            </th>
                                                            <th className="sorting">
                                                                Payment Method
                                                            </th>
                                                            <th className="sorting">
                                                                Account Group
                                                            </th>
                                                            <th className="sorting">
                                                                Partner Account
                                                            </th>
                                                            <th className="sorting">
                                                                Customer Account Name
                                                            </th>
                                                            <th className="sorting">
                                                                Amount
                                                            </th>
                                                            <th className="sorting">
                                                                Currency
                                                            </th>
                                                            <th className="sorting">
                                                                Status
                                                            </th>
                                                            <th className="sorting">
                                                                Identification Info
                                                            </th>
                                                            <th className="sorting">
                                                                Operator
                                                            </th>
                                                            <th className="sorting">
                                                                Actions
                                                            </th>
                                                            <th className="sorting sorting_desc">
                                                                Created At
                                                            </th>
                                                            <th className="sorting">
                                                                Updated At
                                                            </th>
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
    );
}

export default Bonus;
