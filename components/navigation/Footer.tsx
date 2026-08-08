import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { Separator } from '@/components/ui/separator';
import { SmartLink } from '@/components/ui/smart-link';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-section-sm">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-body-lg font-semibold mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Separator */}
          <Separator className="md:hidden bg-white/20" />

          {/* Social Links */}
          <div>
            <h3 className="text-body-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {siteConfig.socials.map((social) => (
                <li key={social.id}>
                  <SmartLink
                    href={social.url}
                    aria-label={social.label}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {social.platform}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Separator */}
          <Separator className="md:hidden bg-white/20" />

          {/* Info & Copyright */}
          <div>
            <h3 className="text-body-lg font-semibold mb-4">{siteConfig.name}</h3>
            <p className="text-white/60 text-caption">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
