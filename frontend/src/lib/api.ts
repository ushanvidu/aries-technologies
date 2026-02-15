// API Configuration and Client
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    serviceInterest?: string;
}

export interface ServiceInquiryData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    serviceType: 'software' | 'ai-ml' | 'web-dev' | 'custom';
    projectTitle: string;
    description: string;
    budget?: string;
    timeline?: string;
    requirements?: string[];
}

class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const config: RequestInit = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                const error = await response.json().catch(() => ({
                    message: 'An error occurred',
                }));
                throw new Error(error.message || `HTTP ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Network error occurred');
        }
    }

    async submitContact(data: ContactFormData) {
        return this.request('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async submitServiceInquiry(data: ServiceInquiryData) {
        return this.request('/api/services/inquiry', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
}

export const api = new ApiClient(API_BASE_URL);
