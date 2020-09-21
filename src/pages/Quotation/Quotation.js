import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Aside } from "../../components";
import { RiMailSendLine } from "react-icons/ri";
 
const Quotation = () => {
   return (
       <>
       <div className="heading">Quotations</div>
       <div className="row">
           <div className="col-md-8">
           <div className="card">
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Client</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>10th January, 2020</td>
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
                    <td>12th January, 2020</td>
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
                    <td>1st June, 2020</td>
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
          </div>
           </div>
           <Aside />
       </div>
       </>
    )
}
 
export default Quotation