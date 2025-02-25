import { Table } from "@/root/types";
import { useState } from "react";

const Appeals: React.FC = () => {
    const [selectedTable, setSelectedTable] = useState<Table>(Table.New);
    return (
        <div className="content-wrapper" style={{ minHeight: "1011.2px" }}>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0"></h1>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right"></ol>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                    <div className="row mb-2">
                        <div id="alerts">
                            <div className="user-alerts">{/**/}</div>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="app">
                                <div data-v-91db92a2="" className="card card-primary card-tabs">
                                    <div data-v-91db92a2="" className="card-header p-0 pt-1">
                                        <ul data-v-91db92a2="" className="nav nav-tabs nav-justified">
                                            <li className="nav-item">
                                                <a href="#" className={`nav-link ${selectedTable === Table.New ? 'active' : ''}`} onClick={() => setSelectedTable(Table.New)}>New</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className={`nav-link ${selectedTable === Table.InWork ? 'active' : ''}`} onClick={() => setSelectedTable(Table.InWork)}>Clarification</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className={`nav-link ${selectedTable === Table.History ? 'active' : ''}`} onClick={() => setSelectedTable(Table.History)}>Fixed</a>
                                            </li>
                                        </ul>
                                    </div>{" "}
                                    <div data-v-91db92a2="" className="card-body">
                                        <div data-v-91db92a2="" className="row">
                                            <div data-v-91db92a2="" className="col mb-2">
                                                <div data-v-91db92a2="" className="btn-toolbar float-left">
                                                    <a data-v-91db92a2="" className="btn btn-info">
                                                        Reset filters
                                                    </a>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        <div data-v-91db92a2="" className="row">
                                            <div
                                                data-v-91db92a2=""
                                                className="col"
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                <table
                                                    data-v-91db92a2=""
                                                    className="table table-bordered table-striped dataTable"
                                                >
                                                    <thead data-v-91db92a2="">
                                                        <tr
                                                            data-v-91db92a2=""
                                                            role="row"
                                                            className="text-center"
                                                        >
                                                            <th data-v-91db92a2="" className="">
                                                                ID
                                                            </th>
                                                            <th data-v-91db92a2="" className="">
                                                                Status
                                                            </th>
                                                            <th data-v-91db92a2="" className="">
                                                                Expiration Date
                                                            </th>
                                                            <th data-v-91db92a2="" className="">
                                                                Operation ID
                                                            </th>
                                                            <th data-v-91db92a2="" className="">
                                                                Message
                                                            </th>
                                                            <th data-v-91db92a2="" className="">
                                                                Attachment
                                                            </th>
                                                            <th
                                                                data-v-91db92a2=""
                                                                className="sorting sorting_desc"
                                                            >
                                                                Created At
                                                            </th>
                                                            <th data-v-91db92a2="" className="sorting">
                                                                Updated At
                                                            </th>
                                                            <th data-v-91db92a2="" className="sorting">
                                                                Closed At
                                                            </th>
                                                        </tr>
                                                    </thead>{" "}
                                                    <tbody data-v-91db92a2="">
                                                        <tr data-v-91db92a2="" className="text-center">
                                                            <td data-v-91db92a2="">{/**/}</td>
                                                            <td data-v-91db92a2="">
                                                                <div data-v-91db92a2="" className="form-group">
                                                                    {/**/} {/**/}{" "}
                                                                    <div data-v-91db92a2="" className="form-group">
                                                                        <select
                                                                            data-v-91db92a2=""
                                                                            className="form-control"
                                                                        >
                                                                            <option data-v-91db92a2="" />{" "}
                                                                            <option data-v-91db92a2="">new</option>
                                                                            <option data-v-91db92a2="">reopen</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td data-v-91db92a2="">{/**/}</td>
                                                            <td data-v-91db92a2="">
                                                                <div data-v-91db92a2="" className="form-group">
                                                                    <input
                                                                        data-v-91db92a2=""
                                                                        placeholder="Operation ID"
                                                                        type="text"
                                                                        className="form-control"
                                                                    />{" "}
                                                                    {/**/} {/**/}
                                                                </div>
                                                            </td>
                                                            <td data-v-91db92a2="">{/**/}</td>
                                                            <td data-v-91db92a2="">{/**/}</td>
                                                            <td data-v-91db92a2="">
                                                                <div data-v-91db92a2="" className="form-group">
                                                                    {/**/}{" "}
                                                                    <div
                                                                        data-v-91db92a2=""
                                                                        id="created_at-date-range"
                                                                        className="input-group"
                                                                    >
                                                                        <button
                                                                            data-v-91db92a2=""
                                                                            id="createdAt-filter-daterange-btn"
                                                                            type="button"
                                                                            className="btn btn-default float-right"
                                                                        >
                                                                            <svg
                                                                                data-v-91db92a2=""
                                                                                className="svg-inline--fa fa-calendar-alt fa-w-14"
                                                                                aria-hidden="true"
                                                                                focusable="false"
                                                                                data-prefix="far"
                                                                                data-icon="calendar-alt"
                                                                                role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 448 512"
                                                                                data-fa-i2svg=""
                                                                            >
                                                                                <path
                                                                                    fill="currentColor"
                                                                                    d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                                                                                />
                                                                            </svg>
                                                                            {/* <i data-v-91db92a2="" class="far fa-calendar-alt"></i> Font Awesome fontawesome.com */}{" "}
                                                                            <svg
                                                                                data-v-91db92a2=""
                                                                                className="svg-inline--fa fa-caret-down fa-w-10"
                                                                                aria-hidden="true"
                                                                                focusable="false"
                                                                                data-prefix="fas"
                                                                                data-icon="caret-down"
                                                                                role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 320 512"
                                                                                data-fa-i2svg=""
                                                                            >
                                                                                <path
                                                                                    fill="currentColor"
                                                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                                                />
                                                                            </svg>
                                                                            {/* <i data-v-91db92a2="" class="fas fa-caret-down"></i> Font Awesome fontawesome.com */}{" "}
                                                                            <span data-v-91db92a2="" />
                                                                        </button>
                                                                    </div>{" "}
                                                                    {/**/}
                                                                </div>
                                                            </td>
                                                            <td data-v-91db92a2="">
                                                                <div data-v-91db92a2="" className="form-group">
                                                                    {/**/}{" "}
                                                                    <div
                                                                        data-v-91db92a2=""
                                                                        id="updated_at-date-range"
                                                                        className="input-group"
                                                                    >
                                                                        <button
                                                                            data-v-91db92a2=""
                                                                            id="createdAt-filter-daterange-btn"
                                                                            type="button"
                                                                            className="btn btn-default float-right"
                                                                        >
                                                                            <svg
                                                                                data-v-91db92a2=""
                                                                                className="svg-inline--fa fa-calendar-alt fa-w-14"
                                                                                aria-hidden="true"
                                                                                focusable="false"
                                                                                data-prefix="far"
                                                                                data-icon="calendar-alt"
                                                                                role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 448 512"
                                                                                data-fa-i2svg=""
                                                                            >
                                                                                <path
                                                                                    fill="currentColor"
                                                                                    d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                                                                                />
                                                                            </svg>
                                                                            {/* <i data-v-91db92a2="" class="far fa-calendar-alt"></i> Font Awesome fontawesome.com */}{" "}
                                                                            <svg
                                                                                data-v-91db92a2=""
                                                                                className="svg-inline--fa fa-caret-down fa-w-10"
                                                                                aria-hidden="true"
                                                                                focusable="false"
                                                                                data-prefix="fas"
                                                                                data-icon="caret-down"
                                                                                role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 320 512"
                                                                                data-fa-i2svg=""
                                                                            >
                                                                                <path
                                                                                    fill="currentColor"
                                                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                                                />
                                                                            </svg>
                                                                            {/* <i data-v-91db92a2="" class="fas fa-caret-down"></i> Font Awesome fontawesome.com */}{" "}
                                                                            <span data-v-91db92a2="" />
                                                                        </button>
                                                                    </div>{" "}
                                                                    {/**/}
                                                                </div>
                                                            </td>
                                                            <td data-v-91db92a2="">
                                                                <div data-v-91db92a2="" className="form-group">
                                                                    {/**/}{" "}
                                                                    <div
                                                                        data-v-91db92a2=""
                                                                        id="closed_at-date-range"
                                                                        className="input-group"
                                                                    >
                                                                        <button
                                                                            data-v-91db92a2=""
                                                                            id="createdAt-filter-daterange-btn"
                                                                            type="button"
                                                                            className="btn btn-default float-right"
                                                                        >
                                                                            <svg
                                                                                data-v-91db92a2=""
                                                                                className="svg-inline--fa fa-calendar-alt fa-w-14"
                                                                                aria-hidden="true"
                                                                                focusable="false"
                                                                                data-prefix="far"
                                                                                data-icon="calendar-alt"
                                                                                role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 448 512"
                                                                                data-fa-i2svg=""
                                                                            >
                                                                                <path
                                                                                    fill="currentColor"
                                                                                    d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                                                                                />
                                                                            </svg>
                                                                            {/* <i data-v-91db92a2="" class="far fa-calendar-alt"></i> Font Awesome fontawesome.com */}{" "}
                                                                            <svg
                                                                                data-v-91db92a2=""
                                                                                className="svg-inline--fa fa-caret-down fa-w-10"
                                                                                aria-hidden="true"
                                                                                focusable="false"
                                                                                data-prefix="fas"
                                                                                data-icon="caret-down"
                                                                                role="img"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 320 512"
                                                                                data-fa-i2svg=""
                                                                            >
                                                                                <path
                                                                                    fill="currentColor"
                                                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                                                />
                                                                            </svg>
                                                                            {/* <i data-v-91db92a2="" class="fas fa-caret-down"></i> Font Awesome fontawesome.com */}{" "}
                                                                            <span data-v-91db92a2="" />
                                                                        </button>
                                                                    </div>{" "}
                                                                    {/**/}
                                                                </div>
                                                            </td>
                                                        </tr>{" "}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </div>
            {/* /.content */}
        </div>

    )

}

export default Appeals;
