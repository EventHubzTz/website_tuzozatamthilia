import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import PrivacyPolicy from "../pages/Home/PrivacyPolicy";
import TermsOfUse from "../pages/Home/TermsOfUse";
import TermsAndConditions from "../pages/Home/TermsAndConditions";
import CopyrightCompliance from "../pages/Home/CopyrightCompliance";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Home />,
    },
    {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
    },
    {
        path: "terms-of-use",
        element: <TermsOfUse />,
    },
    {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
    },
    {
        path: "copyright-compliance",
        element: <CopyrightCompliance />,
    }
]);