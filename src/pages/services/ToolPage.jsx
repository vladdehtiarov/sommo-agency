import { Navigate } from 'react-router-dom';
import { ServicePageLayout } from '../../components/ServicePageLayout';
import { toolsData } from '../../data/toolsData';

export const ToolPage = ({ toolKey }) => {
    const data = toolsData[toolKey];

    if (!data) {
        return <Navigate to="/404" replace />;
    }

    return <ServicePageLayout {...data} />;
};
