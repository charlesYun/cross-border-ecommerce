function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        景辰云贸 - 水杯跨境电商
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '40px' }}>
        专注于将中国优质水杯销往全球市场，提供专业的跨境电商解决方案
      </p>
      
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        justifyContent: 'center',
        margin: '40px 0',
        flexWrap: 'wrap'
      }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px',
          minWidth: '150px'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>500+</div>
          <div>合作企业</div>
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px',
          minWidth: '150px'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>50+</div>
          <div>覆盖国家</div>
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px',
          minWidth: '150px'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>98%</div>
          <div>客户满意度</div>
        </div>
      </div>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '900px',
        margin: '40px auto'
      }}>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px'
        }}>
          <h3 style={{ marginTop: 0 }}>水杯全球分销</h3>
          <p>将中国优质水杯销往欧美、日韩、东南亚等全球主要市场</p>
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px'
        }}>
          <h3 style={{ marginTop: 0 }}>水杯质量认证</h3>
          <p>FDA、LFGB、BPA-Free等国际水杯安全认证服务</p>
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '20px', 
          borderRadius: '10px'
        }}>
          <h3 style={{ marginTop: 0 }}>专业水杯物流</h3>
          <p>针对水杯产品的特殊包装和全球物流解决方案</p>
        </div>
      </div>
      
      <div style={{ marginTop: '40px', opacity: 0.8 }}>
        <p>网站正在优化中，即将上线完整功能...</p>
        <p>GitHub Pages部署准备中</p>
      </div>
    </div>
  )
}

export default App