// import api from "./api";

// /** Create
//  * @param { String: "/route" } route
//  * @param { Object } data
//  */
// export function create(route, data) {
//   console.warn('data: ', data);
//   try {
//     return api.post(route, data);
//   } catch (e) {
//     console.warn('caugh post e: ', e);
//   }
// }

// /** Get All
//  * @param { String: "/route" } route
//  */
// export function getAll(route) {
//   return api.get(route);
// }

// /** Get
//  * @param { String: "/route" } route
//  * @param { Number: 1 } IDBCursor
//  */
// export function get(route, id, user) {
//   return api.get(`${route}/${id}${user || ""}`);
// }

// /** Update
//  * @param { String: "/route" } route
//  * @param { Object } data
//  */
// export function update(route, data) {
//   return api.put(`${route}/${data.id}`, {
//     ...data,
//   });
// }

// /** Delete
//  * @param { String: "/route" } route
//  * @param { Number: 1 } id
//  */
// export function remove(route, id) {
//   return api.delete(`${route}/${id}`);
// }
import api from './api';

/** Create
 * @param { String: "/route" } route
 * @param { Object } data
 */
export function create(route, data) {
  return api.makeCall('POST', route, data);
}

/** Get
 * @param { String: "/route" } route
 * @param { Number: 1 } IDBCursor
 */
export function get(route, id, user) {
  return api.makeCall(`${route}/${id}${user || ''}`);
}

/** Update
 * @param { String: "/route" } route
 * @param { Object } data
 */
export function update(route, data) {
  return api.put(`${route}/${data.id}`, {
    ...data,
  });
}

/** Delete
 * @param { String: "/route" } route
 * @param { Number: 1 } id
 */
export function remove(route, id) {
  return api.delete(`${route}/${id}`);
}
