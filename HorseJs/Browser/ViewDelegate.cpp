#include "ViewDelegate.h"
bool ViewDelegate::OnPopupBrowserViewCreated(CefRefPtr<CefBrowserView> browserView, CefRefPtr<CefBrowserView> popupBrowserView, bool isDevtools)
{
    CefWindow::CreateTopLevelWindow(new WindowDelegate(popupBrowserView, false,isDevtools));
    return true;
}
