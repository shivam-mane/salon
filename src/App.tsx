import { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { useGeo } from './hooks/useGeo'
import Calendar from './components/Calendar'
import AdminDashboard from './admin/AdminDashboard'
import { noirApi } from './api/noirApi'

export default function App() {
  const { user } = useAuth()
  const { coords, error } = useGeo()
  const [time, setTime] = useState<string>()

  const book = async () => {
    if (!time) return

    await noirApi.createAppointment({
      salon_id: 'REPLACE_SALON_UUID',
      service_id: 'REPLACE_SERVICE_UUID',
      time
    })

    alert('Booked')
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>The Noir</h1>

      {/* Detecting location */}
      {!coords && !error && (
        <p>Detecting your location…</p>
      )}

      {/* Location blocked / denied */}
      {error && (
        <div style={{ opacity: 0.8 }}>
          <p>Location access is required to find nearby salons.</p>
          <p style={{ fontSize: 14 }}>
            Please allow location permission from browser settings and refresh the page.
          </p>

          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}

      {/* Location available */}
      {coords && (
        <>
          <Calendar onSelect={setTime} />
          {time && (
            <button onClick={book}>
              Confirm {time}
            </button>
          )}
        </>
      )}

      {/* Admin section */}
      {user?.email === 'admin@thenoir.com' && <AdminDashboard />}
    </div>
  )
}
