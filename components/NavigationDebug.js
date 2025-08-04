export default function NavigationDebug({ navLinks }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', margin: '10px 0' }}>
      <h4>Navigation Debug Info:</h4>
      <p>Total navigation items: {navLinks?.length || 0}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {navLinks?.map((link, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '5px 10px', 
              backgroundColor: '#fff', 
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          >
            <strong>{index + 1}.</strong> {link.mainNavItemLabel}
            <br />
            <small>Link: {link.mainNavItemLink?._path || 'null'}</small>
          </div>
        ))}
      </div>
    </div>
  );
} 