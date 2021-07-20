import { useEffect } from "react"
import { navigate } from 'gatsby'

const NotFoundPage = () => {
  useEffect(() => {
    // navigate('/');
    if(typeof window !== 'undefined') {
      console.log(window.location, '404');
      var pathname = window.location.pathname;
      redirect(pathname);
    }
  }, []);

  const redirect = (path) => {
    switch(path) {
      case '/editing/academic/english-manuscript-editing-services':
      case '/content':
        navigate('/services/academic_editing/manuscript_editing');
        break;
      case '/editing/':
      case '/editing/academic':
        navigate('/services/academic_editing');
        break;
      case '/editing/academic/english-editing-services':
      case '/editing/academic/technical-report-editing-services':
      case '/editing/technical-editing-services/user-manual-editing-services':
        navigate('/services/business_editing/english_editing_india');
        break;
      case '/editing-services-rates':
        navigate('/pricing/');
        break;
      case '/editing/business':
        navigate('/services/business_editing');
        break;
      case '/editing/academic/profile-editing-services':
        navigate('/services/business_editing/company_profile');
        break;
      case '/editing/academic/essay-editing-and-proofreading-services':
        navigate('/services/academic_editing/essay_editing');
        break;
      case '/editing/academic/thesis-editing-services':
        navigate('/services/academic_editing/thesis_editing');
        break;
      case '/editing/business/white-paper-editing-services':
      case '/content/marketing-communications':
      case '/consulting/content-strategy-for-brands':
      case '/consulting':
      case '/editing/business/marketing-document-editing-services':
        navigate('/services/business_editing/marketing_communications_editing');
        break;
      case '/editing/business/business-proposal-editing-services':
      case '/editing/business/business-plan-editing-services':
        navigate('/services/business_editing/business_proposal');
        break;
      case '/content/blog-writing-services':
        navigate('/services/business_editing/blogpost_editing');
        break;
      case '/editing/academic/resume-editing-services':
        navigate('/services/academic_editing/resume_editing');
        break;
      case '/content/ui-microcopy-writing-services':
      case '/content/social-media-content-developer':
      case '/editing/business/website-content-editing-services':
        navigate('/services/business_editing/website_copy_editing');
        break;
      case '/editing/academic/grant-proposal-editing-services':
        navigate('/services/academic_editing/proposal_editing');
        break;
      default:
        navigate('/');
    }
  };

  return null;
}

export default NotFoundPage
