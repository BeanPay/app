import { useEffect, useState } from 'react';
import apiClient from '../../util/api-client'
import DashboardLayout from '../../layouts/dashboard-layout'
import DashboardSectionHeader from '../../design-system/dashboard-section-header'
import BillSettingsList from '../../components/bill-settings-list'

export default function Settings() {
  const [bills, setBills] = useState(null);
  useEffect(() => {
    apiClient.authenticatedRequest(apiClient.getBills)
      .then((resp) => {
        if (resp.status_code == 200) {
          setBills(resp.result);
        }
      })
  }, [])

  return (
    <DashboardLayout pageTitle="Manage Bills">
      <DashboardSectionHeader title="Manage Bills" />
      { bills && <BillSettingsList bills={bills} /> }
    </DashboardLayout>
  );
}
