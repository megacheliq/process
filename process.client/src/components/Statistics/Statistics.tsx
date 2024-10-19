const Statistics: React.FC = () => {
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
                                <div data-v-2358d67a="" className="card">
                                    <div data-v-2358d67a="" className="card-body">
                                        <h1 data-v-2358d67a="">Statistics</h1>
                                        <div data-v-2358d67a="" className="row">
                                            <div data-v-2358d67a="" className="form-group col-3">
                                                <label data-v-2358d67a="">Date:</label>
                                                <div data-v-2358d67a="" className="input-group">
                                                    <div data-v-2358d67a="" className="input-group-prepend">
                                                        <span data-v-2358d67a="" className="input-group-text">
                                                            <svg data-v-2358d67a="" className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                                                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <input data-v-2358d67a="" type="text" id="createdAt-filter-daterange-btn" className="form-control float-right" />
                                                </div>
                                            </div>
                                            <div data-v-2358d67a="" className="form-group col-3">
                                                <label data-v-2358d67a="">Currency:</label>
                                                <select data-v-2358d67a="" id="currency" className="form-control">
                                                    <option data-v-2358d67a="" value="ARS">
                                                        ARS
                                                    </option>
                                                    <option data-v-2358d67a="" value="BDT">
                                                        BDT
                                                    </option>
                                                    <option data-v-2358d67a="" value="CNY">
                                                        CNY
                                                    </option>
                                                    <option data-v-2358d67a="" value="HKD">
                                                        HKD
                                                    </option>
                                                    <option data-v-2358d67a="" value="IDR">
                                                        IDR
                                                    </option>
                                                    <option data-v-2358d67a="" value="INR">
                                                        INR
                                                    </option>
                                                    <option data-v-2358d67a="" value="JPY">
                                                        JPY
                                                    </option>
                                                    <option data-v-2358d67a="" value="KHR">
                                                        KHR
                                                    </option>
                                                    <option data-v-2358d67a="" value="KRW">
                                                        KRW
                                                    </option>
                                                    <option data-v-2358d67a="" value="KZT">
                                                        KZT
                                                    </option>
                                                    <option data-v-2358d67a="" value="LAK">
                                                        LAK
                                                    </option>
                                                    <option data-v-2358d67a="" value="MMK">
                                                        MMK
                                                    </option>
                                                    <option data-v-2358d67a="" value="MYR">
                                                        MYR
                                                    </option>
                                                    <option data-v-2358d67a="" value="PHP">
                                                        PHP
                                                    </option>
                                                    <option data-v-2358d67a="" value="PKR">
                                                        PKR
                                                    </option>
                                                    <option data-v-2358d67a="" value="RUB">
                                                        RUB
                                                    </option>
                                                    <option data-v-2358d67a="" value="SGD">
                                                        SGD
                                                    </option>
                                                    <option data-v-2358d67a="" value="THB">
                                                        THB
                                                    </option>
                                                    <option data-v-2358d67a="" value="TRY">
                                                        TRY
                                                    </option>
                                                    <option data-v-2358d67a="" value="USD">
                                                        USD
                                                    </option>
                                                    <option data-v-2358d67a="" value="UZS">
                                                        UZS
                                                    </option>
                                                    <option data-v-2358d67a="" value="VND">
                                                        VND
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div data-v-2358d67a="" className="row">
                                            <div data-v-2358d67a="" className="col-lg-3 col-6">
                                                <div data-v-2358d67a="" className="small-box bg-info">
                                                    <div data-v-2358d67a="" className="inner">
                                                        <h3 data-v-2358d67a="">4&nbsp;046.01 RUB</h3>
                                                        <p data-v-2358d67a="">Average deposit</p>
                                                    </div> <div data-v-2358d67a="" className="icon">
                                                        <i data-v-2358d67a="" className="ion ion-bag">
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-2358d67a="" className="col-lg-3 col-6">
                                                <div data-v-2358d67a="" className="small-box bg-success">
                                                    <div data-v-2358d67a="" className="inner">
                                                        <h3 data-v-2358d67a="">0</h3>
                                                        <p data-v-2358d67a="">Active details</p>
                                                    </div>
                                                    <div data-v-2358d67a="" className="icon">
                                                        <i data-v-2358d67a="" className="ion ion-stats-bars">
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-2358d67a="" className="col-lg-3 col-6">
                                                <div data-v-2358d67a="" className="small-box bg-warning">
                                                    <div data-v-2358d67a="" className="inner">
                                                        <h3 data-v-2358d67a="">0.00<sup data-v-2358d67a="" style={{ fontSize: "20px" }}>%</sup>
                                                        </h3>
                                                        <p data-v-2358d67a="">Operations with ticket</p>
                                                    </div>
                                                    <div data-v-2358d67a="" className="icon">
                                                        <i data-v-2358d67a="" className="ion ion-person-add">
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-2358d67a="" className="col-lg-3 col-6">
                                                <div data-v-2358d67a="" className="small-box bg-gray-light">
                                                    <div data-v-2358d67a="" className="inner">
                                                        <h3 data-v-2358d67a="">0.38<sup data-v-2358d67a="" style={{ fontSize: "20px" }}>%</sup>
                                                        </h3>
                                                        <p data-v-2358d67a="">Tickets with operator mistake</p>
                                                    </div>
                                                    <div data-v-2358d67a="" className="icon">
                                                        <i data-v-2358d67a="" className="ion ion-person-add"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-2358d67a="" className="row">
                                            <div data-v-2358d67a="" className="col" style={{ fontSize: "0.8rem" }}>
                                                <label data-v-2358d67a="">Conversion by details:</label>
                                                <table data-v-2358d67a="" className="table table-bordered table-striped">
                                                    <thead data-v-2358d67a="">
                                                        <tr data-v-2358d67a="" role="row" className="text-center">
                                                            <th data-v-2358d67a="">Number</th>
                                                            <th data-v-2358d67a="">Bank</th>
                                                            <th data-v-2358d67a="">Conversion</th>
                                                            <th data-v-2358d67a="">Currency</th>
                                                            <th data-v-2358d67a="">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody data-v-2358d67a="">
                                                        <tr data-v-2358d67a="" className="text-center">
                                                            <td data-v-2358d67a="">
                                                                <div data-v-2358d67a="" className="form-group">
                                                                    <input data-v-2358d67a="" placeholder="number" type="text" className="form-control" />
                                                                </div>
                                                            </td>
                                                            <td data-v-2358d67a="">
                                                                <div data-v-2358d67a="" className="form-group">
                                                                </div>
                                                            </td>
                                                            <td data-v-2358d67a="">
                                                                <div data-v-2358d67a="" className="form-group">
                                                                </div>
                                                            </td>
                                                            <td data-v-2358d67a="">
                                                            </td>
                                                            <td data-v-2358d67a="">
                                                                <div data-v-2358d67a="" className="form-group">
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr data-v-2358d67a="">
                                                            <td data-v-2358d67a="">+79962496502</td>
                                                            <td data-v-2358d67a="">sberbank</td>
                                                            <td data-v-2358d67a="">87.22 %</td>
                                                            <td data-v-2358d67a="">RUB</td>
                                                            <td data-v-2358d67a="">no_collaborators</td>
                                                        </tr>
                                                        <tr data-v-2358d67a="">
                                                            <td data-v-2358d67a="">+79962496502</td>
                                                            <td data-v-2358d67a="">alfa-bank</td>
                                                            <td data-v-2358d67a="">0 %</td>
                                                            <td data-v-2358d67a="">RUB</td>
                                                            <td data-v-2358d67a="">no_collaborators</td>
                                                        </tr>
                                                        <tr data-v-2358d67a="">
                                                            <td data-v-2358d67a="">+79122369978</td>
                                                            <td data-v-2358d67a="">alfa-bank</td>
                                                            <td data-v-2358d67a="">45.67 %</td>
                                                            <td data-v-2358d67a="">RUB</td>
                                                            <td data-v-2358d67a="">no_collaborators</td>
                                                        </tr>
                                                        <tr data-v-2358d67a="">
                                                            <td data-v-2358d67a="">+79194701077</td>
                                                            <td data-v-2358d67a="">alfa-bank</td>
                                                            <td data-v-2358d67a="">25.25 %</td>
                                                            <td data-v-2358d67a="">RUB</td>
                                                            <td data-v-2358d67a="">no_collaborators</td>
                                                        </tr><tr data-v-2358d67a="">
                                                            <td data-v-2358d67a="">+79824483011</td>
                                                            <td data-v-2358d67a="">raiffeisen</td>
                                                            <td data-v-2358d67a="">18.75 %</td>
                                                            <td data-v-2358d67a="">RUB</td>
                                                            <td data-v-2358d67a="">disabled</td>
                                                        </tr>
                                                        <tr data-v-2358d67a="">
                                                            <td data-v-2358d67a="">+79194647966</td>
                                                            <td data-v-2358d67a="">sberbank</td>
                                                            <td data-v-2358d67a="">82.00 %</td>
                                                            <td data-v-2358d67a="">RUB</td>
                                                            <td data-v-2358d67a="">disabled</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot data-v-2358d67a="">
                                                        <tr data-v-2358d67a="" className="text-center">
                                                            <th data-v-2358d67a="">Number</th>
                                                            <th data-v-2358d67a="">Bank</th>
                                                            <th data-v-2358d67a="">Conversion</th>
                                                            <th data-v-2358d67a="">Currency</th>
                                                            <th data-v-2358d67a="">Status</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div data-v-2358d67a="" className="row">
                                            <div data-v-2358d67a="" className="col" style={{ fontSize: "0.8rem" }}>
                                                <label data-v-2358d67a="">Operators statistics:</label>
                                                <table data-v-2358d67a="" className="table table-bordered table-striped">
                                                    <thead data-v-2358d67a="">
                                                        <tr data-v-2358d67a="" role="row" className="text-center">
                                                            <th data-v-2358d67a="">Email</th>
                                                            <th data-v-2358d67a="">Online</th>
                                                            <th data-v-2358d67a="">Response Time</th>
                                                        </tr></thead> <tbody data-v-2358d67a="">
                                                    </tbody> <tfoot data-v-2358d67a="">
                                                        <tr data-v-2358d67a="" className="text-center">
                                                            <th data-v-2358d67a="">Email</th>
                                                            <th data-v-2358d67a="">Online</th>
                                                            <th data-v-2358d67a="">Response Time</th>
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
    )
}

export default Statistics;