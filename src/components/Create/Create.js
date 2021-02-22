import React from "react";
import { Gear, HddNetwork, People, Plus, Wallet2 } from "react-bootstrap-icons";


const Create = () => {
  return (
    <>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <Plus className="mx-3" /> Create New Document
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <People className="mx-3"/> Contacts
        </a>
        <a href="#" class="list-group-item list-group-item-action">
         <HddNetwork className="mx-3" /> Connections
        </a>
        <a href="#" class="list-group-item list-group-item-action">
         <Wallet2 className="mx-3" /> Payments
        </a>
        <a
          href="#"
          class="list-group-item list-group-item-action disabled"
          tabindex="-1"
          aria-disabled="true"
        >
         <Gear className="mx-3" /> Settings
        </a>
      </div>
    </>
  );
};

export { Create };
