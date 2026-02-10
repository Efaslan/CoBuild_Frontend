import { FolderKanban } from "lucide-react";

export default function Footer(){
    return(
        <footer className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FolderKanban className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg">CoBuild</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of collaborative development, one project at a time.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Features</li>
                <li className="hover:text-foreground cursor-pointer">Pricing</li>
                <li className="hover:text-foreground cursor-pointer">Security</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">About</li>
                <li className="hover:text-foreground cursor-pointer">Blog</li>
                <li className="hover:text-foreground cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Documentation</li>
                <li className="hover:text-foreground cursor-pointer">Help Center</li>
                <li className="hover:text-foreground cursor-pointer">Community</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2026 CoBuild. All rights reserved.
          </div>
        </div>
      </footer>
    );
}