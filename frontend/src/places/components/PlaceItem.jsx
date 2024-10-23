/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMaphandler = () => setShowMap(true);

  const closeMaphandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    console.log("Deleting...");
    setShowConfirmModal(false);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMaphandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item-modal-actions"
        footer={<Button onClick={closeMaphandler}>Close</Button>}
      >
        <div className="map-container">
          <Map />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancle
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can&apos;t be undone thereafter.
        </p>
      </Modal>
      <li className="place-item my-4 mx-0">
        <Card className="place-item__content p-0">
          <div className="place-item__image w-full h-125 md:h-80 mr-6">
            <img
              src={props.image}
              alt={props.title}
              className="w-full h-full object-cover md:h-80"
            />
          </div>
          <div className="place-item__info text-center p-4">
            <h2 className="m-0 mb-2">{props.title}</h2>
            <h3 className="m-0 mb-2">{props.address}</h3>
            <p className="m-0 mb-2">{props.description}</p>
          </div>
          <div className="place-item__actions p-4 text-center ">
            <Button inverse onClick={openMaphandler}>
              View on Map{" "}
            </Button>
            <Button to={`/places/${props.id}`}>Edit </Button>
            <Button danger onClick={showDeleteWarningHandler}>
              Delete{" "}
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
