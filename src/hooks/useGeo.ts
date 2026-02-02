import { useEffect, useState } from "react";

export function useGeo() {
  const [coords, setCoords] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      },
      () => {
        setError("Location permission denied");
      }
    );
  }, []);

  return { coords, error };
}
