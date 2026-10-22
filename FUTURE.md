# Future Improvements & Roadmap

## What Was Cut for the MVP
- **Database Integration:** Currently, the hardware catalog and requisition tracking use mocked server-side data arrays. Real PostgreSQL/MongoDB integration is deferred to Module 4.
- **Admin Dashboard:** A dedicated view for IT staff to approve or reject requests was cut to focus strictly on the employee submission flow.
- **Complex Auth:** We accept any email to generate a session cookie for demonstration purposes, bypassing standard OAuth/JWT password hashing.

## Next Steps (Post-Assessment)
1. Implement a genuine database adapter to replace `lib/hardware.js`.
2. Add authorization roles (e.g., `role: "admin"` vs `role: "user"`) to restrict who can update the requisition status.
3. Address any peer review feedback received during the Day 50 Capstone Review.