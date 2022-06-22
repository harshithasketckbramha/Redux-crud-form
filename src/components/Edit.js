// import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editData } from "./action/Action";


function EditData({ val, i }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState({
    name: val.name,
    password: val.password
  });

  const handleClose = () => {
    dispatch(editData({ tableData, i }));
    setShow(false);
  };
  const handleShow = () => setShow(true);



  const handleChange = (e) => {
    const tableDataCopy = { ...tableData };
    tableDataCopy[e.target.name] = e.target.value;
    setTableData(tableDataCopy);
  };



  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {/* <Formik> */}
         
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={tableData.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={tableData.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                
              </form>
          
        {/* </Formik> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default EditData;
