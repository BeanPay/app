import BillSettingsPanel from './bill-settings-panel';
import AddNewBill from './add-new-bill';

export default function BillSettingsList({ bills }) {
  return (
    <>
      {bills.map(bill => (
        <BillSettingsPanel bill={bill} />
      ))}
        <AddNewBill onClick={() => console.log("New Bill Click")}/>
    </>
  )
}
