// // src/services/api.js

// // Use relative base so Vite proxy forwards /api -> backend
// // Set VITE_API_BASE only if you DON'T use a proxy. Otherwise leave it unset.
// const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

// // --- helpers
// // async function readJson(res) {
// //   try { return await res.json(); } catch { return {}; }
// // }

// function authHeaders() {
//   const token = localStorage.getItem("token");
//   return token ? { Authorization: `Bearer ${token}` } : {};
// }

// // CONTACT (public)
// // export async function sendContact(form) {
// //   const res = await fetch(`${BASE}/api/contact`, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(form),
// //   });
// //   const j = await readJson(res);
// //   if (!res.ok) throw new Error(j.error || "Failed to send");
// //   return j;
// // }

// // AUTH (admin login)
// export async function login(email, password) {
//   const res = await fetch(`${BASE}/api/auth/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });
//   // const j = await resdJson(res);
//   // if (!res.ok) throw new Error(j.error || "Login failed");
//   // return j; // { token }
//   const j = await res.json().catch(() => ({}));
//   if (!res.ok) throw new Error(j.error || "Login failed");
//   return j; 
// }

// // ADMIN MESSAGES (JWT protected)
// export async function getMessages(page = 1, limit = 10) {
//   const res = await fetch(`${BASE}/api/admin/messages?page=${page}&limit=${limit}`, {
//     headers: { ...authHeaders() },
//   });
//   // const j = await readJson(res);
//   // if (!res.ok) throw new Error(j.error || "Failed to fetch messages");
//   // return j;
//    const j = await res.json().catch(() => ({}));
//   if (!res.ok) throw new Error(j.error || "Failed to fetch messages");
//   return j;
// }

// export async function markMessageRead(id, read) {
//   const res = await fetch(`${BASE}/api/admin/messages/${id}/read`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json", ...authHeaders() },
//     body: JSON.stringify({ read }),
//   });
//   // const j = await readJson(res);
//   // if (!res.ok) throw new Error(j.error || "Failed to update");
//   // return j;
//    const j = await res.json().catch(() => ({}));
//   if (!res.ok) throw new Error(j.error || "Failed to update");
//   return j;
// }

// export async function deleteMessage(id) {
//   const res = await fetch(`${BASE}/api/admin/messages/${id}`, {
//     method: "DELETE",
//     headers: { ...authHeaders() },
//   });
// //   const j = await readJson(res);
// //   if (!res.ok) throw new Error(j.error || "Failed to delete");
// //   return j;
// // }
//   const j = await res.json().catch(() => ({}));
//   if (!res.ok) throw new Error(j.error || "Failed to delete");
//   return j;
// }
// src/services/api.js
const BASE = import.meta.env.VITE_API_BASE || "http://clgsite-backend.vercel.app";
//"http://localhost:5000"

function authHeaders() {
  const raw = (localStorage.getItem("token") || "").replace(/^Bearer\s+/i, "").trim();
  return raw ? { Authorization: `Bearer ${raw}` } : {};
}

export async function login(email, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(j.error || "Login failed");
  return j; // { token }
}

export async function getMessages(page = 1, limit = 10) {
  const res = await fetch(`${BASE}/api/admin/messages?page=${page}&limit=${limit}`, {
    headers: authHeaders(),
  });
  const j = await res.json().catch(() => ({}));
  if (res.status === 401) {
    localStorage.removeItem("token");
    throw new Error("Unauthorized");
  }
  if (!res.ok) throw new Error(j.error || "Failed to fetch messages");
  return j;
}

export async function markMessageRead(id, read) {
  const res = await fetch(`${BASE}/api/admin/messages/${id}/read`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ read }),
  });
  const j = await res.json().catch(() => ({}));
  if (res.status === 401) { localStorage.removeItem("token"); throw new Error("Unauthorized"); }
  if (!res.ok) throw new Error(j.error || "Failed to update");
  return j;
}

export async function deleteMessage(id) {
  const res = await fetch(`${BASE}/api/admin/messages/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  const j = await res.json().catch(() => ({}));
  if (res.status === 401) { localStorage.removeItem("token"); throw new Error("Unauthorized"); }
  if (!res.ok) throw new Error(j.error || "Failed to delete");
  return j;
}
