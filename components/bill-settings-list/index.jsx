import BillSettingsPanel from './bill-settings-panel';

export default function BillSettingsList({ bills }) {
  return (
    <>
      {bills.map(bill => (
        <BillSettingsPanel bill={bill} />
      ))}
    </>
  )
}
