import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSmoothScroll, scrollToTop, getLenis } from './hooks/useSmoothScroll';
import { Layout } from './components/Layout';
import {
  HomePage,
  NoCodePage,
  LowCodePage,
  AIDevelopmentPage,
  AutomationPage,
  MASoftwarePage,
  LoanManagementPage,
  PlannlyPage,
  DyvoPage,
  CurriPage,
  MirenPage,
  BlogPage,
  NoCodeVsTraditionalPage,
  AIAutomationBusinessPage,
  BubbleGuidePage,
  ZapierMakeComparisonPage,
  MVPNoCodePage,
  ChatGPTIntegrationPage,
  LowCodeEnterprisePage,
  AirtableGuidePage,
  WorkflowAutomationBestPracticesPage,
  AICustomerServicePage,
  PrivacyPolicyPage,
  TermsOfUsePage,
  ToolPage,
} from './pages';
import './App.css';

// Scroll to top on route change, or to hash if present
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to hash element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(element, { offset: -100 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // Scroll to top immediately on page change
      scrollToTop(true);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();

  // Add loading animation
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Services */}
        <Route path="/services/no-code" element={<NoCodePage />} />
        <Route path="/services/low-code" element={<LowCodePage />} />
        <Route path="/services/ai-development" element={<AIDevelopmentPage />} />
        <Route path="/services/automation" element={<AutomationPage />} />

        {/* Specific Tools */}
        <Route path="/services/bubble-development" element={<ToolPage toolKey="bubble-development" />} />
        <Route path="/services/weweb-development" element={<ToolPage toolKey="weweb-development" />} />
        <Route path="/services/flutterflow-development" element={<ToolPage toolKey="flutterflow-development" />} />
        <Route path="/services/make-automation" element={<ToolPage toolKey="make-automation" />} />
        <Route path="/services/n8n-automation" element={<ToolPage toolKey="n8n-automation" />} />
        <Route path="/services/supabase-backend" element={<ToolPage toolKey="supabase-backend" />} />
        <Route path="/services/api-integrations" element={<ToolPage toolKey="api-integrations" />} />
        {/* Case Studies */}
        <Route path="/cases/ma-software" element={<MASoftwarePage />} />
        <Route path="/cases/loan-management" element={<LoanManagementPage />} />
        <Route path="/cases/plannly" element={<PlannlyPage />} />
        <Route path="/cases/dyvo" element={<DyvoPage />} />
        <Route path="/cases/curri" element={<CurriPage />} />
        <Route path="/cases/miren" element={<MirenPage />} />
        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/no-code-vs-traditional-development" element={<NoCodeVsTraditionalPage />} />
        <Route path="/blog/ai-automation-business-processes" element={<AIAutomationBusinessPage />} />
        <Route path="/blog/bubble-io-complete-guide" element={<BubbleGuidePage />} />
        <Route path="/blog/zapier-make-automation-comparison" element={<ZapierMakeComparisonPage />} />
        <Route path="/blog/mvp-development-no-code" element={<MVPNoCodePage />} />
        <Route path="/blog/chatgpt-api-integration-guide" element={<ChatGPTIntegrationPage />} />
        <Route path="/blog/low-code-enterprise-solutions" element={<LowCodeEnterprisePage />} />
        <Route path="/blog/airtable-database-design" element={<AirtableGuidePage />} />
        <Route path="/blog/workflow-automation-best-practices" element={<WorkflowAutomationBestPracticesPage />} />
        <Route path="/blog/ai-customer-service-implementation" element={<AICustomerServicePage />} />
        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
