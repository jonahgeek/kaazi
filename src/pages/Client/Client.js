import React from "react";
import { Aside } from "../../components";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RiMailSendLine } from "react-icons/ri";

const Client = () => {
  return (
    <>
      <div className="heading">Clients List</div>
      <div className="row">
        <div className="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <span className="delete">
                    <Link className="action-item">
                      <MdDelete />
                    </Link>
                  </span>
                  <span className="edit">
                    <Link className="action-item">
                      <FiEdit />
                    </Link>
                  </span>
                  <span className="edit">
                    <Link className="action-item">
                      <RiMailSendLine />
                    </Link>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <span className="delete">
                    <Link className="action-item">
                      <MdDelete />
                    </Link>
                  </span>
                  <span className="edit">
                    <Link className="action-item">
                      <FiEdit />
                    </Link>
                  </span>
                  <span className="edit">
                    <Link className="action-item">
                      <RiMailSendLine />
                    </Link>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>
                  <span className="delete">
                    <Link className="action-item">
                      <MdDelete />
                    </Link>
                  </span>
                  <span className="edit">
                    <Link className="action-item">
                      <FiEdit />
                    </Link>
                  </span>
                  <span className="edit">
                    <Link className="action-item">
                      <RiMailSendLine />
                    </Link>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Aside />
      </div>
    </>
  );
};

export default Client;
