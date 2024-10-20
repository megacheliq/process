import { useStateContext } from "@/contexts/ContextProvider";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { FormSelect } from "react-bootstrap";
import { timezones } from "@/root/timezones";
import { useEffect, useState } from "react";
import { getUSDTPriceInRUB } from "@/root/getUSDTPrice";
import { format } from 'date-fns';
import { toZonedTime } from "date-fns-tz";
import Modal from 'react-bootstrap/Modal';

const DefaultLayout: React.FC = () => {
    const savedTimezone = localStorage.getItem('selectedTimezone');
    const [isHovered, setIsHovered] = useState(false);
    const [collapsed, setCollapse] = useState(false);
    const [currency, setCurrency] = useState(0);
    const [dateNow, setDateNow] = useState("");

    if (!savedTimezone) {
        localStorage.setItem('selectedTimezone', timezones[0]);
    }

    const [selectedTimezone, setSelectedTimezone] = useState<string>(savedTimezone || timezones[0]);
    const { token, logout } = useStateContext();
    const [show, setShow] = useState(false);

    const [isInChecked, setIsInChecked] = useState(false);
    const [isOutChecked, setIsOutChecked] = useState(false);
    const [isAccountTypeChecked, setIsAccountTypeChecked] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ModalShow = () => {
        if (!show) return null;
        return (
            <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable" centered>
                <div data-v-5190bedc="" className="modal-content">
                    <div data-v-5190bedc="" className="modal-header">
                        <h3>I'm online</h3>
                        <button
                            type="button"
                            data-dismiss="modal"
                            aria-label="Close"
                            className="close"
                            onClick={handleClose}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div data-v-5190bedc="" className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <div className="custom-control custom-switch">
                                            <input
                                                type="checkbox"
                                                id="customSwitchIN"
                                                className="custom-control-input"
                                                checked={isInChecked}
                                                onChange={() => setIsInChecked(!isInChecked)}
                                            />
                                            <label className="custom-control-label" htmlFor="customSwitchIN">
                                                IN
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <div className="custom-control custom-switch">
                                            <input
                                                type="checkbox"
                                                id="customSwitchOUT"
                                                className="custom-control-input"
                                                checked={isOutChecked}
                                                onChange={() => setIsOutChecked(!isOutChecked)}
                                            />
                                            <label className="custom-control-label" htmlFor="customSwitchOUT">
                                                OUT
                                            </label>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-switch">
                                        <input
                                            id="account_type2"
                                            type="checkbox"
                                            className="custom-control-input"
                                            checked={isAccountTypeChecked}
                                            onChange={() => setIsAccountTypeChecked(!isAccountTypeChecked)}
                                        />
                                        <label className="custom-control-label" htmlFor="account_type2">
                                            17.8.0 monera (TPYZqFU8CGHLg8UoMBN6BHcxM73HueGdrZ)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-5190bedc="" className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={handleClose}>
                            Save
                        </button>
                    </div>
                </div>
            </Modal>
        );
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
            const savedTimezone = localStorage.getItem('selectedTimezone');
            if (savedTimezone) {
                setSelectedTimezone(savedTimezone);
            }

            const response = await getUSDTPriceInRUB();
            setCurrency(response);
            setDateNow(getCurrentTimeInSelectedTimezone());
        };

        fetchData();
    }, []);

    useEffect(() => {
        const body = document.body;

        if (collapsed) {
            body.classList.add('sidebar-collapse');
        } else {
            body.classList.remove('sidebar-collapse');
        }

        return () => {
            body.classList.remove('sidebar-collapse');
        };
    }, [collapsed]);

    const getCurrentTimeInSelectedTimezone = (): string => {
        const selectedTimezone = localStorage.getItem('selectedTimezone') || 'UTC';
        const now = new Date();
        const zonedDate = toZonedTime(now, selectedTimezone);

        return format(zonedDate, 'dd.MM.yyyy HH:mm:ss');
    };

    if (!token) {
        return <Navigate to='/login' />
    }

    const handleTimezoneChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTimezone = event.target.value;
        setSelectedTimezone(newTimezone);
        localStorage.setItem('selectedTimezone', newTimezone);
        const response = await getUSDTPriceInRUB();
        setCurrency(response);
        setDateNow(getCurrentTimeInSelectedTimezone());
    };


    const handleLogout = () => {
        logout();
    }

    const handleCollapse = () => {
        setCollapse(prev => !prev);
    };

    const handleUSDT = async () => {
        const response = await getUSDTPriceInRUB();
        setCurrency(response);
        setDateNow(getCurrentTimeInSelectedTimezone);
    }

    interface NavLinkProps {
        to: string;
        children: React.ReactNode;
    }

    const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
        const location = useLocation();
        const isActive = location.pathname === to;

        return (
            <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
                {children}
            </Link>
        );
    };

    return (
        <>
            <nav id="top-menu" className="nav-wrapper">
                <div className="main-header navbar navbar-expand navbar-white navbar-light d-flex justify-content-between">
                    <ul data-v-12f78743="" className="navbar-nav">
                        <li data-v-12f78743="" className="nav-item">
                            <a data-v-12f78743="" data-widget="pushmenu" onClick={handleCollapse} role="button" className="nav-link">
                                <svg data-v-12f78743="" className="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav  align-items-start">
                        <li data-v-12f78743="" className="nav-item flex-grow-1">
                            <div data-v-12f78743="" className="input-group">
                                <div data-v-12f78743="" className="exchange-rate-container">
                                    <div dir="auto" className="v-select select vs--single vs--searchable">
                                        <div id="vs1__combobox" role="combobox" aria-expanded="false" aria-owns="vs1__listbox" aria-label="Search for option" className="vs__dropdown-toggle">
                                            <div className="vs__selected-options">
                                                <span className="vs__selected">
                                                    bybit: common_RUB
                                                </span>
                                                <input aria-autocomplete="list" aria-labelledby="vs1__combobox" aria-controls="vs1__listbox" type="search" className="vs__search" />
                                            </div>
                                            <div className="vs__actions">
                                                <button type="button" title="Clear Selected" aria-label="Clear Selected" className="vs__clear" style={{ display: "none" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                        <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z">
                                                        </path>
                                                    </svg>
                                                </button>
                                                <svg data-v-12ed6176="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="presentation" className="vs__open-indicator">
                                                    <polygon data-v-12ed6176="" points="18.43 7.72 19.5 8.78 12 16.28 4.5 8.78 5.57 7.72 12 14.16 18.43 7.72" style={{ strokeWidth: 1 }}>
                                                    </polygon>
                                                </svg>
                                                <div className="vs__spinner" style={{ display: "none" }}>Loading...</div>
                                            </div>
                                        </div>
                                        <ul id="vs1__listbox" role="listbox" style={{ display: "none", visibility: "hidden" }}>
                                        </ul>
                                    </div>
                                    <div className="exchange-rate">
                                        <div className="exchange-rate__header">bybit: common_RUB</div>
                                        <div className="exchange-rate__body">
                                            <div className="exchange-rate__item">
                                                <span>USDT</span>
                                                <span> 1</span>
                                                <div>{dateNow}</div>
                                            </div>
                                            <span className="exchange-rate__devider">:</span>
                                            <div className="exchange-rate__item">
                                                <span>{currency.toFixed(2)}</span>
                                                <span> RUB</span>
                                                <div>{dateNow}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-secondary btn-refresh" onClick={handleUSDT}>
                                        <svg className="svg-inline--fa fa-sync fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="sync" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="input-group">
                                <span data-v-12f78743="" className="input-group-text">
                                    <svg data-v-12f78743="" className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z">
                                        </path>
                                    </svg>
                                </span>
                                <FormSelect className="form-control" value={selectedTimezone} onChange={handleTimezoneChange}>
                                    {timezones.map((timezone) => (
                                        <option key={timezone} value={timezone}>
                                            {timezone}
                                        </option>
                                    ))}
                                </FormSelect>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                id="logout"
                                onClick={handleLogout}
                                className="nav-link"
                                style={{
                                    color: isHovered ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <svg
                                    className="svg-inline--fa fa-sign-out-alt fa-w-16"
                                    aria-hidden="true"
                                    focusable="false"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    style={{ width: '1em', height: '1em' }}
                                >
                                    <path
                                        fill="currentColor"
                                        d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                                    ></path>
                                </svg>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <aside id="left-menu" className={`main-sidebar sidebar-dark-primary elevation-4 ${collapsed ? 'sidebar-collapse' : ''}`}>
                <div data-v-b0a55bb2="">
                    <a data-v-b0a55bb2="" href="/" className="brand-link">
                        <span data-v-b0a55bb2="" className="brand-text font-weight-light">OperationsAdmin</span>
                    </a>
                    <div data-v-b0a55bb2="" className="sidebar">
                        <div data-v-b0a55bb2="" className="user-panel mt-3 pb-3 mb-3 d-flex flex-column align-items-center">
                            <div data-v-b0a55bb2="" className="d-flex align-items-center">
                                <div data-v-b0a55bb2="" className="online-dot offline">
                                </div>
                                <div data-v-b0a55bb2="" className="info ml-2">
                                    <a data-v-b0a55bb2="" href="/profile" title="17.8.0 monera" className="d-block user-email">User: 17.8.0 mone...</a>
                                </div>
                            </div>
                            <button data-v-b0a55bb2="" className="btn btn-secondary" onClick={handleShow}>Offline</button>
                        </div>
                        <nav data-v-b0a55bb2="" className="mt-2">
                            <ul data-v-b0a55bb2="" data-widget="treeview" role="menu" data-accordion="false" className="nav nav-pills nav-sidebar flex-column">
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/operation-in">
                                        <svg data-v-b0a55bb2="" className="svg-inline--fa fa-money-bill-alt fa-w-20 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z">
                                            </path>
                                        </svg>
                                        <p data-v-b0a55bb2="">
                                            IN
                                        </p>
                                    </NavLink >
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/operation-out">
                                        <svg data-v-b0a55bb2="" className="svg-inline--fa fa-money-bill-alt fa-w-20 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path>
                                        </svg>
                                        <p data-v-b0a55bb2="">
                                            OUT
                                        </p>
                                    </NavLink >
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/operation-refund"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-money-bill-alt fa-w-20 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z">
                                        </path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            REFUND
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/operation-top-up"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-money-bill-alt fa-w-20 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            TOP-UP
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/operation-prepayment"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-money-bill-alt fa-w-20 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            PREPAYMENT
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/operation-inverse-out"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-money-bill-alt fa-w-20 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            INVERSE OUT
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/operation_bonus"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-money-bill-alt fa-w-20 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="money-bill-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            BONUS
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/partner/account/"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-wallet fa-w-16 nav-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            Accounts
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/partner/account-group"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-object-ungroup fa-w-18 nav-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="object-ungroup" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M564 224c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12h-88v-24h12c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v160H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h88v24h-12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V224h12zM352 64h32v32h-32V64zm0 256h32v32h-32v-32zM64 352H32v-32h32v32zm0-256H32V64h32v32zm32 216v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h224v12c0 6.627 5.373 12 12 12h12v160h-12c-6.627 0-12 5.373-12 12v12H96zm128 136h-32v-32h32v32zm280-64h-12c-6.627 0-12 5.373-12 12v12H256v-12c0-6.627-5.373-12-12-12h-12v-24h88v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12v-88h88v12c0 6.627 5.373 12 12 12h12v160zm40 64h-32v-32h32v32zm0-256h-32v-32h32v32z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            Account groups
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/statistics/"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-chart-pie fa-w-17 nav-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            Statistics
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/balance/show-list"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-coins fa-w-16 nav-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coins" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            Balances
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/ticket/"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-table fa-w-16 nav-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"></path>
                                    </svg><p data-v-b0a55bb2="">
                                            Tickets
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/appeal/"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-file-signature fa-w-18 nav-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            Appeals
                                        </p></NavLink>
                                </li>
                                <li data-v-b0a55bb2="" className="nav-item">
                                    <NavLink to="/sms-hub/"><svg data-v-b0a55bb2="" className="svg-inline--fa fa-envelope fa-w-16 nav-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                    </svg>
                                        <p data-v-b0a55bb2="">
                                            SmsHub
                                        </p></NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>
            </aside>
            <ModalShow />

            <Outlet />
        </>
    )
}

export default DefaultLayout;