import React from 'react'
const roles = [
  { title: 'Bugeters', count: 12, size: 75 },
  { title: 'Savy Spenders', count: 60, size:100 },
  { title: 'Investors', count: 9, size: 65 },
  { title: 'Analysts', count: 15, size: 70 },
]

const RoleCard = () => {
  return (
    <div className='role-card'>
      <h3>Roles</h3>
      <div className="roles-grid">
        {roles.map((role, index) => (
          <div
           className="role-circle"
            key={index}
            style={{
              width:`${role.size}px`,
              height:`${role.size}px`
            }}
            >
            <span className="role-title">{role.title}</span>
            <span className="role-count">{role.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoleCard