import { useState } from "react";
import { Modal } from "react-bootstrap";

const Balances: React.FC = () => {
  const [show, setShow] = useState(false);
  const [targetWallet, setTargetWallet] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (selectedValue === '17.8.0 monera (RUB)') {
      setTargetWallet('TPYZqFU8CGHLg8UoMBN6BHcxM73HueGdrZ');
    } else {
      setTargetWallet('');
    }
  };

  const ModalShow = () => {
    if (!show) return null;
    return (
      <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable" centered>
        <div data-v-5190bedc="" className="modal-content">
          <div data-v-5190bedc="" className="modal-header">
            <h3 data-v-5190bedc="">New TOP-UP</h3>
            <button
              data-v-5190bedc=""
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="close"
              onClick={handleClose}
            >
              <span data-v-5190bedc="" aria-hidden="true">
                ×
              </span>
            </button>
          </div>
          <div data-v-5190bedc="" className="modal-body">
            <div data-v-5190bedc="">
              <div data-v-5190bedc="" className="form-group">
                <label data-v-5190bedc="" htmlFor="balance">
                  Balance
                </label>
                <div
                  dir="auto"
                  className="v-select vs__selected-border-options vs--single vs--searchable"
                  data-v-5190bedc=""
                >

                  <div
                    id="vs1__combobox"
                    role="combobox"
                    aria-expanded="false"
                    aria-owns="vs1__listbox"
                    aria-label="Search for option"
                    className="vs__dropdown-toggle"
                  >
                    <div className="vs__selected-options">
                      <select id="list_select" className="vs__search" onChange={handleSelectChange}>
                        <option value=""></option>
                        <option selected={targetWallet !== ''}>17.8.0 monera (RUB)</option>
                      </select>
                    </div>
                    <div className="vs__actions">
                      <button
                        type="button"
                        title="Clear Selected"
                        aria-label="Clear Selected"
                        className="vs__clear"
                        style={{ display: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                        >
                          <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                        </svg>
                      </button>
                      <svg
                        data-v-12ed6176=""
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        role="presentation"
                        className="vs__open-indicator"
                      >
                        <polygon
                          data-v-12ed6176=""
                          points="18.43 7.72 19.5 8.78 12 16.28 4.5 8.78 5.57 7.72 12 14.16 18.43 7.72"
                          style={{ strokeWidth: 1 }}
                        />
                      </svg>
                      <div
                        className="vs__spinner"
                        style={{ display: "none" }}
                      >
                        Loading...
                      </div>
                    </div>
                  </div>
                  <ul
                    id="vs1__listbox"
                    role="listbox"
                    style={{
                      display: "none",
                      visibility: "hidden"
                    }}
                  />
                </div>
              </div>
              <div data-v-5190bedc="" className="form-group">
                <label data-v-5190bedc="" htmlFor="targetWallet">
                  Target Wallet
                </label>
                <input
                  data-v-5190bedc=""
                  id="targetWallet"
                  disabled
                  value={targetWallet}
                  className="form-control"
                />
              </div>
              {targetWallet === '' ? (
                <div data-v-5190bedc="">
                  <div data-v-5190bedc="">
                    <button
                      data-v-5190bedc=""
                      type="button"
                      disabled
                      className="btn btn-success"
                    >
                      Create top-up
                    </button>
                  </div>
                </div>
              ) : (
                <div data-v-5190bedc="" role="alert" className="form-group alert alert-warning">
                  Be careful, the wallet address may change!
                </div>
              )
              }
            </div>
          </div>
          <div data-v-5190bedc="" className="modal-footer">
            <div data-v-5190bedc="" />
          </div>
        </div>
      </Modal >
    );
  };

  return (
    <div className="content-wrapper" style={{ minHeight: "1011.2px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0"></h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right"></ol>
            </div>

          </div>

          <div className="row mb-2">
            <div id="alerts">
              <div className="user-alerts"></div>
            </div>
          </div>
        </div>

      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div id="app">
                <div data-v-58919dbb="" className="card card-tabs">
                  <div data-v-58919dbb="" className="card-body">
                    <h1 data-v-58919dbb="">Balances</h1>
                    <nav data-v-58919dbb="" className="nav__balance">
                      <ul
                        data-v-58919dbb=""
                        role="tablist"
                        className="nav nav-pills mb-3"
                      >

                        <li className="nav-item">
                          <a href="#trade" className="nav-link active">
                            Trade Balances
                          </a>
                        </li>
                      </ul>
                      <div data-v-58919dbb="">
                        <button
                          data-v-58919dbb=""
                          type="button"
                          className="btn btn-success"
                          onClick={handleShow}
                        >
                          New TOP-UP
                        </button>
                      </div>
                    </nav>
                    <div data-v-58919dbb="" className="card">

                      <table
                        data-v-58919dbb=""
                        className="table table-bordered table-striped"
                      >
                        <thead data-v-58919dbb="">
                          <tr data-v-58919dbb="">
                            <th data-v-58919dbb="">Alias (ID)</th>
                            <th data-v-58919dbb="">Currency</th>
                            <th data-v-58919dbb="">Available</th>
                            <th data-v-58919dbb="">Current</th>
                            <th data-v-58919dbb="">Hold</th>
                            <th data-v-58919dbb="">Updated At</th>
                          </tr>
                        </thead>
                        <tbody data-v-58919dbb="">
                          <tr data-v-58919dbb="">
                            <td data-v-58919dbb="">
                              <a
                                data-v-58919dbb=""
                                href="/balance/t1_bucket_01/trade/192833"
                              >
                                17.8.0 monera (TPYZqFU8CGHLg8UoMBN6BHcxM73HueGdrZ)
                              </a>
                            </td>
                            <td data-v-58919dbb="">RUB</td>
                            <td data-v-58919dbb="">0,00</td>
                            <td data-v-58919dbb="">0,00</td>
                            <td data-v-58919dbb="">
                              <a
                                data-v-58919dbb=""
                                href="/balance/holds/t1_bucket_01/192833/RUB"
                              >
                                0,00
                              </a>
                            </td>
                            <td data-v-58919dbb="">30.09.2024 18:14:01</td>
                          </tr>
                        </tbody>
                        <tfoot data-v-58919dbb="">
                          <tr data-v-58919dbb="">
                            <th data-v-58919dbb="">Alias (ID)</th>
                            <th data-v-58919dbb="">Currency</th>
                            <th data-v-58919dbb="">Available</th>
                            <th data-v-58919dbb="">Current</th>
                            <th data-v-58919dbb="">Hold</th>
                            <th data-v-58919dbb="">Updated At</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div data-v-58919dbb="">
                    <div className="col d-sm-flex justify-content-sm-center">
                      <div
                        data-v-5190bedc=""
                        id="preset-top-up-form"
                        data-backdrop="static"
                        data-keyboard="false"
                        className="modal fade"
                      >
                        <ModalShow/>                       
                      </div>
                    </div>
                  </div>

                  <div data-v-18616d0e="" data-v-58919dbb="">
                    <div
                      data-v-18616d0e=""
                      className="col d-sm-flex justify-content-sm-center"
                    >
                      <div
                        data-v-5190bedc=""
                        data-v-18616d0e=""
                        id="top-up-form"
                        data-backdrop="static"
                        data-keyboard="false"
                        className="modal fade"
                      >
                        <div
                          data-v-5190bedc=""
                          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
                        >
                          <div data-v-5190bedc="" className="modal-content">
                            <div data-v-5190bedc="" className="modal-header">
                              <h3 data-v-18616d0e="" data-v-5190bedc="">
                                New top-up
                              </h3>
                              <button
                                data-v-5190bedc=""
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                                className="close"
                              >
                                <span data-v-5190bedc="" aria-hidden="true">
                                  ×
                                </span>
                              </button>
                            </div>
                            <div data-v-5190bedc="" className="modal-body">
                              <div data-v-18616d0e="" data-v-5190bedc="">
                                <div
                                  data-v-18616d0e=""
                                  data-v-5190bedc=""
                                  className="form-group"
                                >
                                  <label
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    htmlFor="partner"
                                  >
                                    Partner
                                  </label>
                                  <input
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    id="partner"
                                    required
                                    disabled
                                    className="form-control"
                                  />

                                </div>
                                <div
                                  data-v-18616d0e=""
                                  data-v-5190bedc=""
                                  className="form-group"
                                >
                                  <label
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    htmlFor="availableBalance"
                                  >
                                    Currency
                                  </label>
                                  <input
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    id="availableBalance"
                                    required
                                    disabled
                                    className="form-control"
                                  />

                                </div>
                                <div
                                  data-v-18616d0e=""
                                  data-v-5190bedc=""
                                  className="form-group"
                                >
                                  <label
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    htmlFor="hash"
                                  >
                                    Hash
                                  </label>
                                  <input
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    id="hash"
                                    required
                                    className="form-control"
                                  />

                                </div>
                                <div
                                  data-v-18616d0e=""
                                  data-v-5190bedc=""
                                  className="form-group"
                                >
                                  <label
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    htmlFor="amount"
                                  >
                                    Amount
                                  </label>
                                  <input
                                    data-v-18616d0e=""
                                    type="tel"
                                    className="v-money form-control"
                                    id="amount"
                                    name="amount"
                                    required
                                    data-v-5190bedc=""
                                  />

                                </div>
                                <div
                                  data-v-18616d0e=""
                                  data-v-5190bedc=""
                                  className="form-group"
                                >
                                  <label
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    htmlFor="comment"
                                    className="required"
                                  >
                                    Comment:
                                  </label>
                                  <textarea
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    id="comment"
                                    name="comment"
                                    className="form-control"
                                    defaultValue={""}
                                  />

                                </div>

                                <div data-v-18616d0e="" data-v-5190bedc="">
                                  <button
                                    data-v-18616d0e=""
                                    data-v-5190bedc=""
                                    type="button"
                                    className="btn btn-success"
                                  >
                                    Create
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div data-v-5190bedc="" className="modal-footer">
                              <div data-v-18616d0e="" data-v-5190bedc="" />
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
      {/* /.content */}
    </div>

  )

}

export default Balances;