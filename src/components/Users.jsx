import { useState, useEffect } from "react";
import { BsPersonPlus } from "react-icons/bs";
import {
  MdEditNote,
  MdDeleteOutline,
} from "react-icons/md";
import ReactPaginate from "react-paginate";
import axios from "axios";
import UserForm from "./UserForm";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [userForm, showUserForm] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 11;
  const usersViewed = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchUsers = async () => {
      const usersUrl =
        "https://evarosa-rms-api.onrender.com/users";

      const response = await axios.get(usersUrl, {
        signal: controller.signal,
      });

      isMounted && setUsers(response.data.data.data);
    };

    fetchUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      <button
        className='bg-indigo-800 text-white px-8 py-2 outline-none border-none mb-6 rounded-md flex items-center'
        onClick={() =>
          showUserForm((prevUserForm) => !prevUserForm)
        }
      >
        ADD NEW USER{" "}
        <span className='text-white inline-block ml-2 '>
          <BsPersonPlus size='20' />
        </span>
      </button>

      {userForm ? (
        <UserForm showUserForm={showUserForm} />
      ) : null}

      <table className='min-w-full table-auto'>
        <thead>
          <tr className='bg-gray-800'>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>
                Username
              </span>
            </th>
            <th className='px-14 py-2'>
              <span className='text-gray-200'>Email</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Role</span>
            </th>
            <th className='px-16 py-2'>
              <span className='text-gray-200'>Actions</span>
            </th>
          </tr>
        </thead>

        <tbody className='bg-gray-200'>
          {users
            .slice(usersViewed, usersViewed + usersPerPage)
            .map((user) => (
              <tr className='bg-gray-50 text-center mb-8'>
                <td className='px-14 py-2'>
                  <span className='text-center font-semibold'>
                    {user.name}
                  </span>
                </td>
                <td className='px-14 py-2'>
                  <span>{user.email}</span>
                </td>
                <td className='px-14 py-2'>
                  <span>{user.role}</span>
                </td>
                <td className='px-14 py-2'>
                  <div className='flex justify-around items-center'>
                    <span className=' cursor-pointer'>
                      <MdEditNote size={23} color='green' />
                    </span>
                    <span className=' cursor-pointer'>
                      <MdDeleteOutline
                        size={23}
                        color='red'
                      />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {users.length >= 11 ? (
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      ) : null}
    </>
  );
};

export default Users;
