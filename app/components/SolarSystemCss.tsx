'use client'

export default function SolarSystemCss() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Sun */}
      <div className="sx-sun" />

      {/* Mercury */}
      <div className="sx-orbit sx-o-mercury">
        <div className="sx-planet sx-mercury" />
      </div>

      {/* Venus */}
      <div className="sx-orbit sx-o-venus">
        <div className="sx-planet sx-venus" />
      </div>

      {/* Earth + tilt indicator */}
      <div className="sx-orbit sx-o-earth">
        <div className="sx-planet sx-earth">
          <div className="sx-tilt sx-t-earth" />
          <div className="sx-halo sx-h-earth" />
        </div>
      </div>

      {/* Mars */}
      <div className="sx-orbit sx-o-mars">
        <div className="sx-planet sx-mars" />
      </div>

      {/* Jupiter with banding */}
      <div className="sx-orbit sx-o-jupiter">
        <div className="sx-planet sx-jupiter">
          <div className="sx-bands sx-b-jupiter" />
        </div>
      </div>

      {/* Saturn with rings */}
      <div className="sx-orbit sx-o-saturn">
        <div className="sx-planet sx-saturn">
          <div className="sx-rings" />
        </div>
      </div>

      {/* Uranus (cyan, strong axial tilt) */}
      <div className="sx-orbit sx-o-uranus">
        <div className="sx-planet sx-uranus">
          <div className="sx-tilt sx-t-uranus" />
        </div>
      </div>

      {/* Neptune (deep blue) */}
      <div className="sx-orbit sx-o-neptune">
        <div className="sx-planet sx-neptune" />
      </div>
    </div>
  )
}
