**Task:**
Implement a “Download Latest EXE” system in my Next.js (App Router) project.

### 🎯 Goal

When the user clicks the **Download** button:

* The system fetches the latest release from my **private GitHub repo**
* Finds the `.exe` asset
* Redirects the user to that file
* Always serves the latest version automatically
* No auth required for users

---

## 📦 Requirements

### 1️⃣ Environment Variables

Create or update `.env.local`:

```
GITHUB_TOKEN=YOUR_GITHUB_PAT
GITHUB_OWNER=YOUR_USERNAME
GITHUB_REPO=YOUR_REPO_NAME
```

Use `process.env` properly.

---

### 2️⃣ Create API Route

Create:

```
app/api/download/route.ts
```

### Behavior:

* Call:

  ```
  https://api.github.com/repos/{OWNER}/{REPO}/releases/latest
  ```
* Use Authorization header with Bearer token
* Parse JSON response
* Find asset where `name.endsWith(".exe")`
* If not found → return 404 JSON
* If found → redirect to `browser_download_url`

### Implementation Requirements:

* Use `NextResponse`
* Use `fetch`
* Add proper error handling
* Add `cache: "no-store"` to fetch
* Type-safe (TypeScript)
* Clean production-level code

---

### 3️⃣ Create Download Button Component

Create reusable component:

```
components/DownloadButton.tsx
```

It should:

* Render a styled button
* On click → go to `/api/download`
* Use `<a>` not client fetch
* Be accessible
* Be clean and production ready

---

### 4️⃣ Add Security Improvements

* Ensure token is never exposed client-side
* Use server-side API route only
* Add safe fallback error response

---

### 5️⃣ Optional Enhancement (Add This If Clean)

Add support for:

* OS detection (Windows only for now)
* Future support for Mac `.dmg`

Structure code cleanly to allow expansion.

---

## 📁 Expected File Structure

```
app/
 └── api/
      └── download/
           └── route.ts

components/
 └── DownloadButton.tsx
```

---

## 🧠 Important Rules

* Use App Router conventions
* Do NOT use Pages Router
* Do NOT expose GitHub token
* Write clean, production-level code
* No console.logs
* Add comments explaining key logic
* Handle edge cases properly

---

## 🚀 Final Output

Return:

* Full code for `route.ts`
* Full code for `DownloadButton.tsx`
* Any required notes
