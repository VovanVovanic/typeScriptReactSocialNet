import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import Denny from "../../assets/images/Deineris.jpg";
import { UsersType } from "../redux/reducers/users";
import classes from "./Users.module.css";


type UsersPropsTypes = {
  users: UsersType
  pages: number
  initialPage: number
  total: number
  pagination: number
  followUser: (id: number) => void
  nofollowUser: (id: number) => void
  setPagination: (pagination: number) => void
  onPageSet: (i: number) => void
};
const Users: React.FC<UsersPropsTypes> = ({
  users,
  nofollowUser,
  followUser,
  pages,
  onPageSet,
  total,
  pagination,
  setPagination,
}) => {
  let pageLinkCount = Math.ceil(total / pages);
  let pagesList = [];

  for (let i = 1; i <= pageLinkCount; i++) {
    let pageLink = (
      <span className={classes.pageLink} onClick={() => onPageSet(i)}>
        {i}
      </span>
    );
    pagesList.push(pageLink);
  }

  let visiblePages = [...pagesList].splice(pagination, 10);

  const paginationHandler = (dir: string) => {
    if (dir === "back") {
      setPagination(pagination - 10);
    }

    if (dir === "forward") {
      setPagination(pagination + 10);
    }
  };

  const userList = users.map(({ name, id, photos, followed, status }) => {
    return (
      <li className={classes.UsersItem} key={id}>
        <NavLink to={"/profile/" + id}>
          <img
            className={classes.Img}
            src={photos.small ? photos.small : Denny}
            alt={"Denny"}
          />
        </NavLink>

        <div className={classes.Buttons}>
          {!followed ? (
            <button onClick={() => {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "44ea4853-9f85-442f-ae33-04c415e0ca20",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    followUser(id);
                  }
                });
            }
            }>Follow</button>
          ) : (
              <button onClick={() => {
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "44ea4853-9f85-442f-ae33-04c415e0ca20",
                      },
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      nofollowUser(id);
                    }
                  });
              }

              }>Nofollow</button>
            )}
        </div>
        <div className={classes.Content}>
          <h4>{name}</h4>
          <div>{status}</div>
        </div>
        <div className={classes.Address}>
          <div>{"country"}</div>
          <div>{"city"}</div>
        </div>
      </li>
    );
  });
  return (
    <div className={classes.Users}>
      <h2>Users</h2>
      <ul>{userList}</ul>
      <div>
        <button onClick={() => paginationHandler("back")}>back</button>
        {visiblePages}
        <button onClick={() => paginationHandler("forward")}>forward</button>
      </div>
    </div>
  );
};
export default Users;
