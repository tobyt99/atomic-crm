import type { Company } from '../../types';
import { fetchWithTimeout } from '../../misc/fetchWithTimeout';

// Helper function to get the favicon URL
async function getFaviconUrl(website: string): Promise<string | null> {
    try {
        // get favicon from domain
        const url = new URL(website);
        const domain = url.hostname;
        const origin = url.origin;
        const faviconUrl = `${origin}/favicon.ico`;
        const response = await fetchWithTimeout(faviconUrl);
        if (response.ok) {
            return faviconUrl;
        }
        // Fallback: Try Clearbit logo
        const clearbitUrl = `https://logo.clearbit.com/${domain}`;
        const clearbitResponse = await fetchWithTimeout(clearbitUrl);
        if (clearbitResponse.ok) {
            return clearbitUrl;
        }
    } catch (error) {
        return null;
    }
    return null;
}

// Main function to get the avatar URL
export async function getCompanyAvatar(record: Partial<Company>): Promise<{
    src: string;
    title: string;
} | null> {
    if (!record.website) {
        return null;
    }

    // Step 1: Try to get favicon from website domain
    const faviconUrl = await getFaviconUrl(record.website);
    if (faviconUrl) {
        return {
            src: faviconUrl,
            title: 'Company favicon',
        };
    }

    // TODO: Step 2: Try to get image from LinkedIn.

    return null;
}
