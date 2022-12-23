import React from 'react';
import CreateEditPage from './Employee/CreateEditPage';
import EmplyoeeListing from './Employee/EmplyoeeListing';

function App() {
  const [openCreateEdit, setOpenCreateEdit] = React.useState(false);
  const [editStatus, setEditStatus] = React.useState<Boolean>(false);
  const [rowData, setRowData] = React.useState<any>();
  const openCreateEditPage = () => {
    setOpenCreateEdit(true);
  }
  const cancelCreateEdit = () => {
    setOpenCreateEdit(false);
    setEditStatus(false);
    setRowData(null);
  }

  return (
    <div>

      {openCreateEdit ? <CreateEditPage rowData={rowData} editStatus={editStatus} cancelCreateEdit={cancelCreateEdit} /> : 
      <EmplyoeeListing openCreateEditPage={openCreateEditPage} setOpenCreateEdit={setOpenCreateEdit} setEditStatus={setEditStatus} setRowData={setRowData} />
      }
      {/* <DeleteConfirm/> */}

    </div>
  );
}

export default App;
