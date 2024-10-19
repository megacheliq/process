import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import GuestLayout from "./GuestLayout";
import Login from "@/components/Login/Login";
import Profile from "@/components/Profile/Profile";
import OperationIn from "@/components/OperationIn/OperationIn";
import OperationOut from "@/components/OperationOut/OperationOut";
import Refund from "@/components/Refund/Refund";
import TopUp from "@/components/TopUp/TopUp";
import PrePayment from "@/components/PrePayment/PrePayment";
import InverseOut from "@/components/InverseOut/InverseOut";
import Bonus from "@/components/Bonus/Bonus";
import Statistics from "@/components/Statistics/Statistics";
import Balances from "@/components/Balances/Balances";
import Tickets from "@/components/Tickets/Tickets";
import Appeals from "@/components/Appeals/Appeals";
import SmsHub from "@/components/SmsHub/SmsHub";
import Accounts from "@/components/Accounts/Accounts";
import AccountForm from "@/components/Accounts/AccountForm";
import AccountUpdateForm from "@/components/Accounts/AccountUpdateForm";
import AccountGroups from "@/components/AccountGroups/AccountGroups";
import AccountGroupForm from "@/components/AccountGroups/AccountGroupForm";
import AccountGroupFormUpdate from "@/components/AccountGroups/AccountGroupFormUpdate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/operation-in',
                element: <OperationIn/>
            },
            {
                path: '/operation-out',
                element: <OperationOut/>
            },
            {
                path: '/operation-refund',
                element: <Refund/>
            },
            {
                path: '/operation-top-up',
                element: <TopUp/>
            },
            {
                path: '/operation-prepayment',
                element: <PrePayment/>
            },
            {
                path: '/operation-inverse-out',
                element: <InverseOut/>
            },
            {
                path: '/operation_bonus',
                element: <Bonus/>
            },
            {
                path: '/statistics',
                element: <Statistics/>
            },
            {
                path: '/balance/show-list',
                element: <Balances/>
            },
            {
                path: '/ticket',
                element: <Tickets/>
            },
            {
                path: '/appeal',
                element: <Appeals/>
            },
            {
                path: '/sms-hub',
                element: <SmsHub/>
            },
            {
                path: 'partner/account',
                element: <Accounts/>
            },
            {
                path: 'partner/account/new',
                element: <AccountForm/>
            },
            {
                path: `partner/account/:accountId/edit`,
                element: <AccountUpdateForm/>
            },
            {
                path: 'partner/account-group',
                element: <AccountGroups/>
            },
            {
                path: 'partner/account-group/new',
                element: <AccountGroupForm/>
            },
            {
                path: 'partner/account-group/:groupId/edit',
                element: <AccountGroupFormUpdate/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
]);

export default router;