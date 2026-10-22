# Data Architecture

## Server Data Fetching (Day 37)
- The initial hardware catalog is fetched entirely on the server within `app/catalog/page.js`. 
- Individual hardware details are fetched server-side in `app/catalog/[id]/page.js`.

## Client Data Fetching (Day 41)
- `SWR` is utilized in `components/SearchBox.js` to enable real-time search filtering.
- Initial server-fetched data is passed to SWR as `fallbackData` to eliminate empty loading states on first paint.

## API Endpoints (Day 39)
- `GET /api/hardware`: Serves the hardware catalog (supports `?q=` query filtering).
- `POST /api/requisitions`: Validates incoming hardware requests and creates a new requisition record.